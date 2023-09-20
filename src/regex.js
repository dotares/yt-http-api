export function getCleanedData(input) {
    let idRegex = /\{"videoRenderer":\{"videoId":"[^"]*"/g;
    let titleRegex = /,"title":\{"runs":\[\{"text":"[^"]*"\}\]/g;

    let idMatch;
    let titleMatch;

    let idIterations = 0;
    let titleIterations = 0;

    while ((idMatch = idRegex.exec(input)) !== null) {
        console.log(idMatch[0].slice(-12, -1));
        idIterations++;
    }

    while ((titleMatch = titleRegex.exec(input)) !== null) {
        console.log(titleMatch[0]);
        titleIterations++;
    }

    console.log(idIterations);
    console.log(titleIterations);
}
