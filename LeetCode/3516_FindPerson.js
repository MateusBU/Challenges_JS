var findClosest = function(x, y, z) {
    const person1 = Math.abs(x - z);
    const person2 = Math.abs(y - z);

    if((person1 - person2) < 0) return 1;
    if((person1 - person2) > 0) return 2;
    return 0;
};

x = 2, y = 7, z = 4;

console.log(findClosest(x, y, z));