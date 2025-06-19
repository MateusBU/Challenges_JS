
function closestNumbers(arr) {
    // Write your code here
    
    var newArr = [];
    arr.sort((a, b) => a - b);
    var minDifr = arr[1] - arr[0];
    for(var i = 0; i < arr.length-1; i++){
        var j = i+1;
        var minDifrAux = arr[j] - arr[i];
        if(minDifr > minDifrAux){
            minDifr = minDifrAux;
        }
    }
    
    for(var i = 0; i < arr.length-1; i++){
        var j = i+1;
        var minDifrAux = arr[j] - arr[i];
        if(minDifr == minDifrAux){
            newArr.push(arr[i], arr[j]);
        }
    }
    return newArr;

}

arr = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854 ];
console.log(closestNumbers(arr))