function breakingRecords(scores) {
    // Write your code here
    const games = scores.length;
    var maxScore = scores[0];
    var minScore = scores[0];
    var arrayGames = [0, 0];

    for (let index = 0; index < games; index++) {
        if(maxScore < scores[index])
        {
            maxScore = scores[index];
            arrayGames[0] += 1;
        }
        if(minScore > scores[index])
        {
            minScore = scores[index];
            arrayGames[1] += 1;
        }
    }
    return arrayGames;
}

console.log(breakingRecords([12, 24, 10, 24]))