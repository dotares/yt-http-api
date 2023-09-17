import express from "express";
import "dotenv/config";

import getVideos from "./getVideos.js";

const app = express();
const port = process.env.PORT;

app.get("/:listenId", async (req, res) => {
    res.send(await getVideos(`${req.params.listenId}`));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
