var divideArray = function(nums, k) {
    let ans = [];
    const n = nums.length;
    nums.sort((a, b) => a - b);

    for(let i = 0; i < (n-2);){
        const aux = nums.slice(i, i + 3);
        const aux1 = aux[2] - aux[0];
        const aux2 = aux[1] - aux[0];
        const aux3 = aux[2] - aux[1];
        if((aux1 > k) || (aux2 > k) || (aux3 > k)){
            return [];
        }
        ans.push(aux);
        i += 3;
    }
    return ans;
};

const nums = [4,2,9,8,2,12,7,12,10,5,8,5,5,7,9,2,5,11];
const k = 14;
console.log(divideArray(nums, k))