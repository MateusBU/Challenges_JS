
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if(x1 != x2 && v1 == v2) return "NO";
    console.log(1);

    var n1 = x1 - x2;
    var n2 = v2 - v1;
    console.log(n1);
    console.log(n2);

    

    if((n1 % n2) != 0) return "NO";
    console.log(2);

    var steps = n1/n2;

    if(steps < 0) return "NO";
    console.log(3);  

    return 'YES';
}

X1 = 4;
V1 = 6;
X2 = 4;
V2 = 6;

console.log(kangaroo(X1, V1, X2, V2));