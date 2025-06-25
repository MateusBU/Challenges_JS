var divideString = function(s, k, fill) {

    const strLength = s.length;

    for(let i = 0; i < k; i++){
        if((strLength % k) == 0){
            break;
        }
        s += fill;
    }

    const parts = [];
    for (let i = 0; i < strLength; i += k) {
        parts.push(s.substring(i, i + k));
    }

   return parts;
};

const s = "abcdefghis";
const k = 3;
const fill = "x";

console.log(divideString(s, k , fill));