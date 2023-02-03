class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

}
/*
prev = keep previous node
current = current node
next = next node 
 */

const reverse = (head) => {
    let current = head;
    let prev = null;
    while (current !== null) {
        const next = current.next;
        //reverse the pointer 
        current.next = prev;

        //begin the shift 
        prev = current;
        current = next;

    }
    //prev = contain the new head
    return prev;
}

const reverseRecursive = (head, prev = null) => {
    if (head === null) return prev;
    //reverse the pointer 
    const next = head.next;
    head.next = prev;

    return reverseRecursive(next, head);
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
a.next = b;
b.next = c;
c.next = d;

const aa = new Node('A');
const bb = new Node('B');
const cc = new Node('C');
const dd = new Node('D');
aa.next = bb;
bb.next = cc;
cc.next = dd;


console.log(reverse(a));
console.log('---Recursion---');
console.log(reverseRecursive(aa));