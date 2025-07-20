/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if(word.length < 3) return false;

    if(!hasVowel(word)) return false;

    if(!hasConsonant(word)) return false;

    if(hasCaracters(word)) return false;

    return true;
};

function hasVowel(str) {
  return /[aeiou]/i.test(str);
}

function hasConsonant(str) {
  return /[bcdfghjklmnpqrstvwxyz]/i.test(str);
}

function hasCaracters(str) {
  return /[@#$]/i.test(str);
}

word = "234AS@"
console.log(isValid(word));