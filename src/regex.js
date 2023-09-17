export function getVideoIds(input) {
    let regex = /"videoId":"[^"]*"/g;

    const matches = input.match(regex);

    let matchesSet = new Set();

    if (matches)
        for (let i = 0; i < matches.length; i++) matchesSet.add(matches[i]);

    let matchesArray = [...matchesSet];

    console.log(matchesArray.length);
    console.log(matchesArray);
}

export function getVideoTitles(input) {
    let regex = /"title":\{"runs":\[\{"text":"([^"]*)"/g;

    let matchesArray = [];

    let match;
    while ((match = regex.exec(input)) !== null) {
        matchesArray.push(match[1]);
    }

    console.log(matchesArray);

    //     // const matches = input.match(regex);

    //     // let matchesSet = new Set();

    //     // if (matches)
    //     //     for (let i = 0; i < matches.length; i++) matchesSet.add(matches[i]);

    //     // let matchesArray = [...matchesSet];

    //     // console.log(`titles: ${matchesArray}`);
}
