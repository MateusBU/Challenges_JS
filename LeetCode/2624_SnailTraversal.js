/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {

    if((rowsCount * colsCount) !== this.length) {
        return [];
    }
    const array = this;
    let arrayFinal= [];
    let rows = 0;
    let cols = 0;
    let down = 1;
    for (let index = 0; index < array.length; index++) {
        if (!arrayFinal[rows]) {
            arrayFinal[rows] = [];  // Initialize inner array
        }
        arrayFinal[rows][cols] = array[index];

        if(down) {
            if(++rows > (rowsCount - 1)) {
                cols++;
                rows = rowsCount - 1;
                down = 0;
            }
        }
        else {
            if(--rows < 0) {
                cols++;
                rows = 0;
                down = 1;
            }
        }
    }
    return arrayFinal;
}


const arr = [1,2,3,4];
console.log(arr.snail(1,4)); // [[1,2,3,4]]

