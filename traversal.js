/*Similar to Array but efficeincy when insert/delete specific node */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
const linklistTraversalRecursion = (head)=>{
    if(head === null) return;
    console.log(head.value);
    linklistTraversalRecursion(head.next);

}
const linklistTraversal = (head) => {
    let current = head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
a.next = b;
b.next = c;
c.next = d;

linklistTraversal(a);
linklistTraversalRecursion(a);