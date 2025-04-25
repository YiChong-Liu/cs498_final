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

    try {
        const pipeline = [];

        pipeline.push({ $unwind: "$hashtags" });
        pipeline.push({ $group: { _id: "$hashtags", count: { $sum: 1 } } });
        pipeline.push({ $sort: { count: -1 } });
        pipeline.push({ $limit: 100 });

        // Question:what happens if the number of target hashtags < 100?

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





// API #7: /api/verified-user-engagement







module.exports = router;
