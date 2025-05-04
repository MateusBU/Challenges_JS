
function findMedian(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    const median = Math.ceil(arr.length/2)
    return arr[median-1];
}
arr = [5, 1, 2 , 4, 3, 0, 6]
console.log(findMedian(arr))