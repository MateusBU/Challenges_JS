/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 == null && list2 == null){
        return null;
    }
    var listNode;
    let currentL1 = list1;
    let currentL2 = list2;

    if(currentL2 != null && currentL1 == null){
        listNode = {val: currentL2.val, next: null};
        currentL2 = currentL2.next;
    }
    if(currentL1 != null && currentL2 == null){
        listNode = {val: currentL1.val, next: null};
        currentL1 = currentL1.next;
    }
    else if(currentL1 != null && currentL2 != null){
        if(currentL1.val < currentL2.val){
            listNode= { 
                val: currentL1.val, 
                next: null };
            currentL1 = currentL1.next;
        }
        else{
            listNode= { 
                val: currentL2.val, 
                next: null };
                currentL2 = currentL2.next;
        }
    }
    let current = listNode;
    while(currentL2 != null || currentL1 != null ){
        if(currentL2 != null && currentL1 == null){
            current.next = { val: currentL2.val, next: null };
            current = current.next;
            currentL2 = currentL2.next;
        }
        else if(currentL1 != null && currentL2 == null){
            current.next = { val: currentL1.val, next: null };
            current = current.next;
            currentL1 = currentL1.next;
        }
        else if(currentL1 != null && currentL2 != null){
            if(currentL1.val < currentL2.val){
                current.next = { 
                    val: currentL1.val, 
                    next: null };
                currentL1 = currentL1.next;
            }
            else{
                current.next = { 
                    val: currentL2.val, 
                    next: null };
                currentL2 = currentL2.next;
            }
            current = current.next;
        }
    }
    return listNode;
};
const list1 = null;
const list2 = null;
// const list1 = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 4,
//       next: null
//     }
//   }
// };

// const list2 = {
//   val: 1,
//   next: {
//     val: 3,
//     next: {
//       val: 4,
//       next: null
//     }
//   }
// };
console.log(mergeTwoLists(list1, list2));
