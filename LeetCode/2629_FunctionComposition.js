/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        var result = x;
        functions.reverse().forEach(item => {
            result = item(result);
        });
        return result;
    }
};


const fn = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(fn(4)) // 9
