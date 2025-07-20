var hasCycle = function(head){
    var slow = head;
    var fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        

        if(slow === fast){
            return true;
        }
    }
    return false;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Criando os nós
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

// Ligando os nós
node1.next = node2;
node2.next = node3;
node3.next = node4;

// Criando um ciclo: último nó aponta para node2
node4.next = node2;

// Testa se tem ciclo
console.log(hasCycle(node1));  // Vai imprimir: true