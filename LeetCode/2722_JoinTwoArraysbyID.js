/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    arr2.forEach(obj => {
        const index = arr1.findIndex(item => item.id === obj.id);
        if(index !== -1){
            arr1[index] = {...arr1[index], ...obj};
        }
        else{
            arr1.push(obj);
        }
    })
    return arr1.sort((a, b) => a.id - b.id);
};
const arr1 = [{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}]
const arr2 = [{"id":2,"o":48,"z":84,"y":61}]

console.log(join(arr1, arr2));