import express from "express";
import "dotenv/config";
import cors from "cors";

import getVideos from "./getVideos.js";

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get("/", (req, res) => {
    try {
        res.send({
            status: {
                statusCode: `${res.statusCode}`,
            },
            message: {
                usage: "Call the 'listen' route, add a 't' parameter with your query, for example: /listen?t=<YOUR_QUERY>",
            },
        });
    } catch (err) {
        console.log(err);
    }
});

app.get("/listen", async (req, res) => {
    try {
        if (res.statusCode === 200) {
            res.send(await getVideos(`${req.query.t}`));
        } else {
            res.send({
                status: {
                    statusCode: `${res.statusCode}`,
                },
            });
        }
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
