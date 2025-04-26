
function getDayName(dateString){
    const everyDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [month, day, year] = dateString.split('/').map(Number); //convert each string of the array into a number
    const date = new Date(year, month - 1, day); // month is 0-indexed 
    return everyDaysOfWeek[date.getDay()];
}

console.log(getDayName('10/11/2009'));

