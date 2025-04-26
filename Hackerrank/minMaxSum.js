function miniMaxSum(nums) {
    // Complete the function
    if(nums.length == 1){
        console.log(`${nums[0]} ${nums[0]}`);
        return;
    }
    
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let firstLargest = sum - nums[0];
    let lastLargest = sum - nums[1];

    for (let index = 0; index < nums.length; index++) {

        let sumMinusNumber = sum - nums[index];

        if(firstLargest < sumMinusNumber)
        {
            firstLargest = sumMinusNumber;
        }
        if((lastLargest > sumMinusNumber))
        {
            lastLargest = sumMinusNumber;
        }
    }
    console.log(`${lastLargest} ${firstLargest}`);
}

miniMaxSum([1, 2, 3, 4, 5])