function grayCode(n) {

    const maxNumber = 2**n - 1;
    let result = [];
    for(let i = 0; i <= maxNumber; i++){
        result.push(n ^ (n >> 1));
    }
    return result;
}

const n = 2;
console.log(grayCode(n));