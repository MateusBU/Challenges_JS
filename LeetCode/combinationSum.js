function combinationSum(candidates, target) {
    const result = [];

    function backtrack(remaining, currentCombination, start) {
        if (remaining === 0) {
            // If the remaining sum is exactly zero, save the current combination
            result.push([...currentCombination]);
            return;
        }

        if (remaining < 0) {
            // If the sum exceeds the target, stop exploring this path
            return;
        }

        // Loop through candidates starting from 'start' index
        for (let i = start; i < candidates.length; i++) {
            currentCombination.push(candidates[i]); // Choose the number
            backtrack(remaining - candidates[i], currentCombination, i); 
            console.log(currentCombination);
            // 'i' allows using the same number multiple times
            currentCombination.pop(); // Undo the last choice (backtrack)
        }
    }

    backtrack(target, [], 0);
    return result;
}
const candidates = [2, 3, 6, 7, 1];
const target = 7;

const output = combinationSum(candidates, target);

console.log('output: ', output);
