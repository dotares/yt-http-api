export function getCleanedData(input) {
    const idRegex = /\{"videoRenderer":\{"videoId":"[^"]*"/g;
    const titleRegex = /,"title":\{"runs":\[\{"text":"[^"]*"\}\]/g;
    const artistRegex = /,"longBylineText":\{"runs":\[\{"text":"[^"]*"/g;
    const coverRegex =
        /\{"videoId":"[^"]*","thumbnail":\{"thumbnails":\[\{"url":"[^"]*","width":360,"height":202\}/g;

    let idMatch;
    let titleMatch;
    let artistMatch;
    let coverMatch;

    let searchResults = [];

    while (
        (idMatch = idRegex.exec(input)) !== null &&
        (titleMatch = titleRegex.exec(input)) !== null &&
        (artistMatch = artistRegex.exec(input)) !== null &&
        (coverMatch = coverRegex.exec(input)) !== null
    ) {
        console.log(idMatch[0].slice(-12, -1));
        console.log(titleMatch[0].slice(27, -3));
        console.log(artistMatch[0].slice(36, -1));
        console.log(coverMatch[0].slice(60, -27));

        searchResults.push({
            videoId: idMatch[0].slice(-12, -1),
            videoTitle: titleMatch[0].slice(27, -3),
            videoArtist: artistMatch[0].slice(36, -1),
            videoCover: coverMatch[0].slice(60, -27),
        });
    }

    console.log(searchResults);
    console.log(searchResults.length);
}
