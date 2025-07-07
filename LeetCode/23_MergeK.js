var getArrayFromList = function(list){
    var arrL1=[];

    while(list != null ){
      arrL1.push(list.val);
      list = list.next;
    }
    return arrL1;
}

var mergeKLists = function(lists) {
  var array = [];

  console.log(1);
    if(lists == null || (lists.length == 0)){
      return [];
    }
  console.log(2);

    for(list of lists){
      const arrayAux = getArrayFromList(list);
      if(arrayAux){
        array.push(...arrayAux);    
      }
    }
    array.sort((a, b) => a - b);

    if(array.length == 0){
      return null;
    }

  console.log(3);
    var listNode = {val: array[0], next: null};
    let current = listNode;

    for(let i = 1; i < array.length; i++){
        current.next = { val: array[i], next: null };
        current = current.next;
    }

    return listNode;
};
// const lists = null;
const lists = [
  null
];
// const lists = [
//   {
//     val: 1,
//     next: {
//       val: 4,
//       next: {
//         val: 5,
//         next: null
//       }
//     }
//   },
//   {
//     val: 1,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: null
//       }
//     }
//   },
//   {
//     val: 2,
//     next: {
//       val: 6,
//       next: null
//     }
//   }
// ];
console.log(mergeKLists(lists));