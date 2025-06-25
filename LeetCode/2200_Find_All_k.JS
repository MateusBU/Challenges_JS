var findKDistantIndices = function(nums, key, k) {
    let arrayIndex = [];
    const numsLength = nums.length;
    for(let i = 0; i < numsLength; i++){
        if(nums[i] === key){
            arrayIndex.push(i);
        }
    }
    const arrayIndexLength = arrayIndex.length;
    let respArray = [];
    for(let i = 0; i < numsLength; i++){
        let j = 0
        for(; j < arrayIndexLength; j++){
            if(Math.abs(i - arrayIndex[j]) <= k){
                break;
            }
        }
        if(j != arrayIndexLength){
            respArray.push(i);
        }
    }
    return respArray;
};

nums = [2,2,2,2,2];
key = 2;
k = 2;
console.log(findKDistantIndices(nums, key, k));