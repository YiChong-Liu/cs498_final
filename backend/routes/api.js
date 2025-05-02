const express = require("express");
const router = express.Router();
const mongoUtil = require("../db");


// API #1: Connection test
router.get("/test", async (req, res) => {
    try {
        const db = mongoUtil.getDb();
        const collections = await db.listCollections().toArray();
        res.json({ status: "ok", db: "Sucessfully connected!", collections: collections.map(c => c.name) });
    } catch (err) {
        console.error("Connection test failed:", err);
        res.status(500).json({ status: "error", message: "DB connection failed" });
    }
});


// API #2: /api/thread-by-user

router.get("/thread-by-user", async (req, res) => {
    const db = mongoUtil.getDb();
    const screenName = req.query.screen_name;
    if (!screenName) return res.status(400).json({ error: "Cannot find the user!" });

    try {
        const replies = await db.collection("tweets")
            .find({
                "user.screen_name": screenName,
                "in_reply_to_status_id": { $ne: null }
            })
            .project({
                _id: 1,
                text: 1,
                created_at: 1,
                in_reply_to_status_id: 1,
                "user.name": 1,
                "user.screen_name": 1
            })
            .sort({ created_at: 1 })
            .toArray();

        res.json(replies);
    } catch (err) {
        console.error("Error fetching thread:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


// API #3: /api/most-active-country

// 查询拥有最多推文的国家
router.get("/most-active-country", async (req, res) => {
    const db = mongoUtil.getDb();

    try {
        const result = await db.collection("tweets").aggregate([
            // filter掉没有国家信息的推文（place_country 为 null）
            { $match: { place_country: { $ne: null } } },

            // 按国家进行分组，并统计每个国家的推文数量
            { $group: { _id: "$place_country", tweet_count: { $sum: 1 } } },

            // 按 tweet_count 倒序排序，数量最多的排最前
            { $sort: { tweet_count: -1 } },

            // 只返回数量最多的那个国家
            { $limit: 1 }
        ]).toArray();

        // 如果找不到任何国家（少见），返回提示
        if (result.length === 0) {
            return res.status(404).json({ message: "failed to find tweet data" });
        }

        // 返回国家名称和推文数量
        res.json({
            country: result[0]._id,
            tweet_count: result[0].tweet_count
        });
    } catch (err) {
        console.error("Failed to find the country:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


// API #4: /api/most-active-user

// 查询推文最多的用户
router.get("/most-active-user", async (req, res) => {
    const db = mongoUtil.getDb();

    try {
        // count how many times the name appears
        const result = await db.collection("tweets").aggregate([
            { $group: { _id: "$user.screen_name", tweet_count: { $sum: 1 } } },
            // 排序
            { $sort: { tweet_count: -1 } },
            //return the first result
            { $limit: 1 }
        ]).toArray();

        if (result.length === 0) {
            return res.status(404).json({ message: "No users found." });
        }

        res.json({
            user_screen_name: result[0]._id,
            tweet_count: result[0].tweet_count
        });
    } catch (err) {
        console.error("Error: cannot find most active user", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


// API #5: /api/top-hashtags
router.get("/top-hashtags", async (req, res) => {
    const db = mongoUtil.getDb();
    // allow user to set a new display limit
    const limit = parseInt(req.query.limit) || 100;
    try {
        const pipeline = [];

        pipeline.push({ $unwind: "$hashtags" });
        pipeline.push({ $group: { _id: "$hashtags", count: { $sum: 1 } } });
        pipeline.push({ $sort: { count: -1 } });
        pipeline.push({ $limit: limit });

        const top_list_hashtag = await db.collection("tweets").aggregate(pipeline).toArray();

        res.json(top_list_hashtag.map(tag => ({
            hashtag: tag._id,
            count: tag.count
        })));
    } catch (err) {
        console.error("Something wrong while fetching hashtags:", err);
        res.status(500).json({ error: "Internal server error (hashtag analysis failed)" });
    }
});


// API #6: /api/three-user-cycles

/**
 * A->B 与 B->A
 * A->C 与 C->A
 * B->C 与 C->B
 * => cycle!
 */

router.get("/three-user-cycles", async (req, res) => {
    const db = mongoUtil.getDb();

    try {
        let replyGroup = await db.collection("tweets").find({
            in_reply_to_screen_name: { $ne: null }
        }).toArray();
        console.log("number of tweets which have replies", replyGroup.length);
        let reply_pair = {}; // 存 (A -> B)

        for (let index = 0; index < replyGroup.length; index++) {
            let tweet = replyGroup[index];
            let start = tweet.user?.screen_name;
            let end = tweet.in_reply_to_screen_name;

            // 名字不为空
            if (start && end) {
                if (!reply_pair[start]) {
                    reply_pair[start] = new Set();
                }
                reply_pair[start].add(end);
            }
        }

        let users = Object.keys(reply_pair);
        console.log("number of users" + users.length);
        let cycles = [];
        // brute force:any better solutions?
        for (let i = 0; i < users.length; i++) {
            for (let j = i + 1; j < users.length; j++) {
                for (let k = j + 1; k < users.length; k++) {
                    let A = users[i], B = users[j], C = users[k];

                    if (
                        reply_pair[A]?.has(B) && reply_pair[B]?.has(A) &&
                        reply_pair[B]?.has(C) && reply_pair[C]?.has(B) &&
                        reply_pair[A]?.has(C) && reply_pair[C]?.has(A)
                    ) {
                        cycles.push({ A, B, C });
                    }
                }
            }
        }
        console.log("number of cycles" + cycles.length);
        res.json(cycles);
    } catch (e) {
        console.error("error", e);
        res.status(500).json({ error: "internal server error" });
    }
});


// API #7: /api/verified-user-engagement
router.get("/verified-user-engagement", async (req, res) => {
    const db = mongoUtil.getDb();

    try {
        let tweets = await db.collection("tweets").find({
            "user.verified": true
        }).toArray();

        let count = {};

        for (let i = 0; i < tweets.length; i++) {
            let t = tweets[i];
            let user = t.user?.screen_name;
            if (user) {
                // 归零
                if (!count[user]) {
                    count[user] = { original: 0, reply: 0, retweet: 0 };
                }

                if (t.is_retweet) {
                    count[user].retweet += 1;
                } else if (t.in_reply_to_status_id) {
                    count[user].reply += 1;
                } else {
                    count[user].original += 1;
                }
            }
        }

        let percentage = [];

        for (let u in count) {
            let total = count[u].original + count[u].reply + count[u].retweet;
            if (total === 0) continue;

            // calculate the result percentage
            let original = count[u].original / total;
            let reply = count[u].reply / total;
            let retweet = count[u].retweet / total;
            
            // format the percentage
            let original_percentage = Math.round(original * 100) + "%";
            let reply_percentage = Math.round(reply * 100) + "%";
            let retweet_percentage = Math.round(retweet * 100) + "%";

            percentage.push({
                user: u,
                original_percentage,
                reply_percentage,
                retweet_percentage
            });
        }

        res.json(percentage);
    } catch (e) {
        console.error("error", e);
        res.status(500).json({ error: "internal server error" });
    }
});

module.exports = router;
