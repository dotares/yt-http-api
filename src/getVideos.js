import { getCleanedData } from "./regex.js";

const getVideos = async (query) => {
    try {
        const response = await fetch(
            `https://www.youtube.com/results?search_query=${query}+audio`
        );
        const resultsString = await response.text();

        return getCleanedData(resultsString);
    } catch (error) {
        console.log(error);
    }
};

export default getVideos;
