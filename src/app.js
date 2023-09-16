import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

const getVideos = async (query) => {
    try {
        const response = await fetch(
            `https://www.youtube.com/results?search_query=${query}+audio`
        );
        const resultsString = await response.text();
        return resultsString;
    } catch (error) {
        console.log(error);
    }
};

app.get("/", async (req, res) => {
    res.send(await getVideos("icecream"));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
