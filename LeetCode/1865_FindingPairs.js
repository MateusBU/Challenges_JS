/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;

    this.freqMap = new Map();
    for(let num of nums1){
        this.freqMap.set(num, (this.freqMap.get(num) || 0) + 1);
    }
    console.log(this.freqMap);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    this.nums2[index] += val;
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let count = 0;
    for (let num2 of this.nums2){
        let complement = tot - num2;
        // console.log(num2, " ", this.freqMap.get(complement) || 0);
        count+= (this.freqMap.get(complement) || 0);
    }
    console.log(count);
    return count;
};
const obj = new FindSumPairs([1,1,2,2,2,3], [1,4,5,2,5,4]);
obj.count(7);
obj.add(3,2);
obj.count(8);
obj.count(4);
obj.add(0,1);
obj.add(1,1);
obj.count(7);

console.log(obj);
/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */