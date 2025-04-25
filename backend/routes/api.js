const express = require("express");
const router = express.Router();
const mongoUtil = require("../db");


// API #1: Connection test
router.get("/test", async (req, res) => {
    try {
        const db = mongoUtil.getDb();
        const collections = await db.listCollections().toArray();
        res.json({ status: "ok", db: "connected", collections: collections.map(c => c.name) });
    } catch (err) {
        console.error("Connection test failed:", err);
        res.status(500).json({ status: "error", message: "DB connection failed" });
    }
});


// API #2: /api/thread-by-user


// API #3: /api/most-active-country


// API #4: /api/most-active-user



// API #5: /api/top-hashtags


// API #6: /api/three-user-cycles



// API #7: /api/verified-user-engagement

module.exports = router;
