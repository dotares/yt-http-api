export function getCleanedData(input) {
    const idRegex = /\{"videoRenderer":\{"videoId":"[^"]*"/g;
    const titleRegex = /,"title":\{"runs":\[\{"text":"[^"]*"\}\]/g;

    let idMatch;
    let titleMatch;

    let idIterations = 0;
    let titleIterations = 0;

    let searchResults = [];

    while (
        (idMatch = idRegex.exec(input)) !== null &&
        (titleMatch = titleRegex.exec(input)) !== null
    ) {
        console.log(idMatch[0].slice(-12, -1));
        console.log(titleMatch[0].slice(27, -3));

        searchResults.push({
            videoId: idMatch[0].slice(-12, -1),
            videoTitle: titleMatch[0].slice(27, -3),
        });

        idIterations++;
        titleIterations++;
    }

    // console.log(idIterations);
    // console.log(titleIterations);
    console.log(searchResults);
}
