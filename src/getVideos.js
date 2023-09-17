import { getVideoIds } from "./regex.js";
// import { getVideoTitles } from "./regex.js";

const getVideos = async (query) => {
    try {
        const response = await fetch(
            `https://www.youtube.com/results?search_query=${query}+audio`
        );
        const resultsString = await response.text();

        getVideoIds(resultsString);
        // getVideoTitles(resultsString);

        return resultsString;
    } catch (error) {
        console.log(error);
    }
};

export default getVideos;
