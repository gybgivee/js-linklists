class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

}

const linkListFind = (head, index) => {
    let current = head;
    let count = 0;
    while (current !== null) {

        if (count === index) return current.val;
        current = current.next;
        count+=1;
    }
    return null;
}

const linkListFindRecursive = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;

   return linkListFindRecursive(head.next,index-1);
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
a.next = b;
b.next = c;
c.next = d;

console.log(linkListFind(a, 7));
console.log(linkListFind(a, 2));
console.log('---Recursion---');
console.log(linkListFindRecursive(a, 7));
console.log(linkListFindRecursive(a, 2));