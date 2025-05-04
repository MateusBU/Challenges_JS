function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let numberOfDivisble = 0;

    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            if(((ar[i] + ar[j]) % k) == 0)
            {
                numberOfDivisble++;
            }
        }           
    }
    return numberOfDivisble;
}

const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2]

console.log(divisibleSumPairs(n, k, ar))