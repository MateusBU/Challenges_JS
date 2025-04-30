/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let stringRoman = ''
    let arrayNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let arrayStrings = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for (let index = 0; index < arrayNumbers.length; index++) {
        if(num >= arrayNumbers[index])
        {
            stringRoman += (arrayStrings[index].repeat(num/arrayNumbers[index]))
            num %= arrayNumbers[index];
        }
    }
    return stringRoman;
};

intToRoman(1994)