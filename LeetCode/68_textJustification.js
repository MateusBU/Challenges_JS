var fullJustify = function(words, maxWidth) {
    
    let s = [];
    let sFinal = [];
    let firstWord = 1;
    let rowLength = 0;
    for(let i = 0; i < words.length; i++){
        // console.log(words[i], words[i].length);
        if(firstWord){
            s.push(words[i]);
            rowLength += words[i].length;
            firstWord = 0;
            // console.log(s);
        }
        else{
            s.push(words[i]);
            rowLength += words[i].length + 1;
            // console.log(s);
        }
        console.log(rowLength);
        if(rowLength > maxWidth){
            s.pop();
            sFinal.push(mountString(s, maxWidth));
            s = []
            rowLength = 0;
            firstWord = 1;
            i--;
        }

    }

    sFinal.push(mountLastString(s, maxWidth));

    console.log(s);

    return sFinal;
};

var mountLastString = function(s, maxWidth){
    let result = "";
    if(s.length === 1){
        result = s[0] + (" ".repeat(maxWidth - s[0].length));
    }
    else{
        const lengthWithoutSpace = s.join("").length;
        const totalLength = lengthWithoutSpace + (s.length - 1);
        const spaceLeftLength = maxWidth - totalLength;

        console.log('lengthWithoutSpace: ' + lengthWithoutSpace);
        console.log('totalLength: ' + totalLength);
        console.log('spaceLeftLength: ' + spaceLeftLength);

        for(let i = 0; i < s.length; i++){
            result += s[i] + ' ';
        }
        result = result.slice(0, -1);
        if(spaceLeftLength > 0)
            result += (" ".repeat(spaceLeftLength));
    }
    return result;
}

var mountString = function(s, maxWidth){

    console.log("-----------------------")
    const lengthWithoutSpace = s.join('').length;
    const totalSpaces = maxWidth - lengthWithoutSpace;
    const gaps = s.length - 1;

    if (gaps === 0) return s[0] + ' '.repeat(totalSpaces); // only one word

    const spacePerGap = Math.floor(totalSpaces / gaps);
    let extraSpaces = totalSpaces % gaps;

    let result = '';
    for (let i = 0; i < s.length; i++) {
        result += s[i];
            if (i < gaps) {
                result += ' '.repeat(spacePerGap + (extraSpaces > 0 ? 1 : 0));
        if (extraSpaces > 0) extraSpaces--;
        }
    }
    return result;
}

// const words = ["This", "is", "an", "example", "of", "text", "justification."];
const words = ["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"];
const maxWidth = 16;
// ["ask   not   what","your country can","do  for  you ask","what  you  cando","for your country"]
// ["ask   not   what","your country can","do  for  you ask","what  you can do","for your country"]
console.log(fullJustify(words, maxWidth));