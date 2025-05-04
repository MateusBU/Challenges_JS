
function lonelyinteger(a) {
    // Write your code here 
    var number = 0;
    var n = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            n = a[i];
            if(a[i] == a[j]){
                number++;
                console.log(`i: ${i}, j: ${j}, n: ${n}`)
                if(number >= 2)
                {
                    break;
                }
            }
        }
        if(number == 1)
        {
            console.log(`number: ${number}`)
            return  n;
        }
        number = 0;
    }
    return number;
}

// a = [1,2,3,4,3,2,1];
// a = [1,1,2];
a = [0,0,1,2,1];
console.log(lonelyinteger(a));