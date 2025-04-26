function getSecondLargest(nums) {
    // Complete the function
    if(nums.length == 1)
        return nums[0]
    
    let firstLargest = nums[0];
    let secondLargest = nums[1];
    for (let index = 0; index < nums.length; index++) {
        if(firstLargest < nums[index])
        {
            secondLargest = firstLargest;
            firstLargest = nums[index];
            console.log(`F: ${firstLargest}, S: ${secondLargest}`);
        }
        if((secondLargest < nums[index]) && firstLargest > nums[index])
        {
            secondLargest = nums[index];
        }
    }
    return secondLargest;
}

console.log(getSecondLargest([6, 6, 6, 6, 6]))
console.log(getSecondLargest([5, 1, 8, 6, 6]))
console.log(getSecondLargest([9, 6, 3, 1, 2]))
console.log(getSecondLargest([6, 5]))
console.log(getSecondLargest([5, 6]))
console.log(getSecondLargest([10, 11, 6, 2, 3]))
console.log(getSecondLargest([10, 11, 6, 2, 11]))
console.log(getSecondLargest([10, 11, 6, 2, 10]))