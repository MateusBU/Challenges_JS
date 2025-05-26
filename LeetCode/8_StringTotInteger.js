/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var strInt = '';
    var negative = 0;
    s = s.replace(/^\s+/, "");

    if(isNaN(s[0]) && (s[0] != '-')  && (s[0] != '+'))
    {
        console.log('return');
        return 0;
    }
    console.log(s);

    if(s[0] == '-')
    {
        negative = 1;
        s = s.slice(1);
    }
    else if(s[0] == '+')
    {
        s = s.slice(1);
    }

    for (let index = 0; index < s.length; index++)
    {
        if((strInt.length == 0) && (s[index] == '0'))
        {
            continue;
        }
        if(isNaN(s[index]) || (s[index]== ' '))
        {
            break;
        }
        else
        {
            strInt += s[index];
        }
    }

    var number = Number(strInt);
    if(negative)
    {
        
        number *= -1;
    }

    if(number > 2147483647)
    {
        return 2147483647;
    }
    else if(number < -2147483648)
    {
        return -2147483648;
    }

    return number;
};

s = "  +0 123";
console.log((myAtoi(s)));