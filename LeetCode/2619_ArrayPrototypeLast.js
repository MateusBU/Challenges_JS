Array.prototype.last = function() {
    return this.length > 0 ? this.at(-1) : -1;
};

const arr = [0,0,0];
console.log(arr.last()); // 3