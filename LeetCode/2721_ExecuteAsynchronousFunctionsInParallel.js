/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

var promiseAll = function(functions) {
    let functionsAray = [];
    functions.forEach((fn) =>{
        functionsAray.push(fn());
    })

    return Promise.all(functionsAray);   
}

function aux(f){
    return new Promise((resolve, reject) => {
        resolve(f)
    })
}

let functions= [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]

const promise = promiseAll(functions)
promise.then(console.log);

