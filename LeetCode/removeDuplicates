/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteNode(head, val) {
    if (!head) return null;

    if (head.val === val) {
        return head.next;
    }
}

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
const node3 = new ListNode(1);
const node2 = new ListNode(1, node3);
const node1 = new ListNode(1, node2);

console.log(node1);
current = node1;
while(current !== null && current.next !== null){
    if(current.val == current.next.val){
        current.next = current.next.next;
    }
    else
    {
        current = current.next;
    }
}
console.log(node1)