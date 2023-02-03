class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

}

const linkListFind = (head, target) => {
    let current = head;
    while (current !== null) {

        if (current.val === target) return true;

        current = current.next;
    }
    return false;
}

const linkListFindRecursive = (head, target) => {
    if (head === null) return false;
    if (head.val === target) return true;

   return linkListFindRecursive(head.next,target);
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
a.next = b;
b.next = c;
c.next = d;

console.log(linkListFind(a, 'D'));
console.log(linkListFind(a, 'E'));
console.log('---Recursion---');
console.log(linkListFindRecursive(a, 'D'));
console.log(linkListFindRecursive(a, 'E'));