import express from "express";
import "dotenv/config";

import getVideos from "./getVideos.js";

const app = express();
const port = process.env.PORT;

app.get("/listen", async (req, res) => {
    try {
        res.send(await getVideos(`${req.query.t}`));
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
