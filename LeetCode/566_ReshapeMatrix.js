var matrixReshape = function(mat, r, c) {
    const matrixRows = mat.length;
    const matrixCol = mat[0].length;

    if((matrixCol * matrixRows) != (r * c)){
        return mat;
    }

    var k = 0;
    var l = 0;
    matriz = Array.from({ length: r }, () => Array(c).fill(0));

    for(var i = 0; i < matrixRows; i++){
        for(var j = 0; j < matrixCol; j++){
            matriz[l][k] = mat[i][j];
            if(++k >= c){
                k = 0;
                l++;
            }
        }        
    }
    return matriz;
};

mat = [[1,2,3,4]], r = 2, c = 2;
console.log(matrixReshape(mat, r, c));