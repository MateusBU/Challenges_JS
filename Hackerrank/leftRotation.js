function rotateLeft(d, arr) {
    // Write your code here
    d = d % arr.length;
    for(var i = 0; i < d; i++){
        arr.push(arr.shift());
    }
    return arr;
}

const arr = [1,2,3,4,5];
const d = 2;
console.log(rotateLeft(d, arr));