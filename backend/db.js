const { MongoClient } = require("mongodb");

let db;

module.exports = {
    connectToServer: async function (callback) {
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        db = client.db("eurovisionDB");
        callback();
    },
    getDb: function () {
        return db;
    },
};
