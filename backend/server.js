require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoUtil = require("./db");
const apiRoutes = require("./routes/api");

const app = express();
app.use(cors());
app.use(express.json());

mongoUtil.connectToServer(() => {
    app.use("/api", apiRoutes);
    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000");
    });
});
