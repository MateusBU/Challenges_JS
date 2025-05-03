
function timeConversion(s) {
    // Write your code here
    const lastTwo = s.slice(-2);
    let firstTwo = s.slice(0, 2);
    let modifyString = '';
    if(lastTwo == 'AM')
    {
        if(firstTwo >= '12')
        {
            firstTwo = Number(firstTwo) - 12;
            if(firstTwo == 0)
            {
                firstTwo += '0';
            }
            modifyString = firstTwo + s.slice(2, -2);
        } 
        else
        {
            modifyString = s.slice(0, -2);
        }
    }
    else
    {
        if(firstTwo >= '12')
        {
            modifyString = s.slice(0, -2);
        } 
        else
        {
            firstTwo = Number(firstTwo) + 12;
            modifyString = firstTwo + s.slice(2, -2);
        } 
    }
    return modifyString;
}

console.log(timeConversion('12:00:00AM'));
