var findLucky = function(arr) {
    var luckyNumber = -1;
    var maxNumber = Math.max(...arr);

    var arrResp = new Array(maxNumber + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        arrResp[arr[i]]++;
    }
    for (let i = arrResp.length - 1; i > 0; i--) {
        if(i == arrResp[i])
        {
            return i;
        }
    }
    return luckyNumber;
};

arr = [2, 2, 3, 4];

console.log(findLucky(arr));
