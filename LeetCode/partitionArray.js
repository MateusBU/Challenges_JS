function minPartitions(nums, k) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
    
    // Step 2: Initialize variables
    let count = 1;
    let start = nums[0];
    
    // Step 3: Iterate through the array
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - start > k) {
            console.log(i, nums[i], start)
            count++;
            start = nums[i];
        }
    }
    
    return count;
}

nums = [1,2,3,3,4,4,5,5,6,7,8]

k = 2;

console.log(minPartitions(nums, k))