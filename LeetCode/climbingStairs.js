function climbStairs(n) {
    if (n <= 2) return n;

    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

const n = 3;
console.log(`Ways to climb 2 steps: ${climbStairs(2)}`);
console.log(`Ways to climb 3 steps: ${climbStairs(3)}`);
console.log(`Ways to climb 4 steps: ${climbStairs(4)}`);
console.log(`Ways to climb 5 steps: ${climbStairs(5)}`);
console.log(`Ways to climb 6 steps: ${climbStairs(6)}`);
