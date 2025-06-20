var minMaxDifference = function(num) {
    
    let flagMax = 0, flagMin = 0;
    num = num.toString();
    let min = num, max = num;
    let numbMax = ''; numbMin = '';
    const n = num.length;
    for(let i = 0; i < n; i++){
        if((num[i] != '9') && !flagMax){
            numbMax = num[i];
            flagMax = 1;
        }
        if((num[i] != '0') && !flagMin){
            numbMin = num[i];
            flagMin = 1;
        }
        if(flagMax && flagMin){
            break;
        }
    }
    if(numbMax === '' || numbMin === ''){
        return Number(num);
    }
    max = num.replace(new RegExp(numbMax, 'g'), '9');
    min = num.replace(new RegExp(numbMin, 'g'), '0');

    return Number(max) - Number(min);
};

const num = 11891;
console.log(minMaxDifference(num));