
function matchingStrings(strings, queries) {
    // Write your code here
    var numbersOfArray = []
    queries.forEach(item =>{
        // console.log(item);
        let matching = strings.reduce((count, string) => string === item ? count + 1 : count, 0);
        numbersOfArray.push(matching);
    });
    return numbersOfArray;
}

const s = ['aba', 'baba', 'aba', 'xzxb'];
const q = ['aba', 'xzxb', 'ab'];

console.log(matchingStrings(s, q));