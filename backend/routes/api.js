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






// API #4: /api/most-active-user







// API #5: /api/top-hashtags







// API #6: /api/three-user-cycles





// API #7: /api/verified-user-engagement







module.exports = router;
