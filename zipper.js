/*
for each link list should have its own 
- head 
- current
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

}
const zipperLists = (head1,head2)=>{
    let currentHead = head1;
    //console.log(currentHead,head1);
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;

    while(current1 !== null && current2 !== null){
      
        if(count % 2 === 0){
            //by reference = currentHead.next = head1.next
            currentHead.next = current2;
            current2 = current2.next;
        }else{
            currentHead.next = current1;
            current1 = current1.next;
        }
        currentHead = currentHead.next;
        //console.log({currentHead},{head1},"\n");
        count+=1;
    }
    //if one of the linklist longer , add the remaining to currentHead
    if(current1 !== null) currentHead.next = current1;
    if(current2 !== null) currentHead.next = current2;

    return head1;
}
const zipperListsRecursion = (head1,head2)=>{
    if(head1 === null && head2 === null) return null;
    if(head1 === null) return head2;
    if(head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;

    //change the pointer direction
    head1.next = head2;
    head2.next = zipperListsRecursion(next1,next2);
    
    return head1;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
a.next = b;
b.next = c;
c.next = d;

const x = new Node('X');
const y = new Node('Y');
const z = new Node('Z');
x.next = y;
y.next = z;

console.log(zipperLists(a,x))
//console.log(zipperListsRecursion(a,x))
