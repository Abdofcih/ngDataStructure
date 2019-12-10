class Node{
  next:Node
  constructor(public val){
      this.val = val;
      this.next = null;
  }
}
export class Queue {
  first:Node;
  last:Node;
  size:number;
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
}

enqueue(val){
    var newNode = new Node(val);
    if(this.size === 0){
        this.first = newNode;
        this.last = newNode;
    }
    else{
        this.last.next = newNode;
        this.last = newNode;
    }
    return ++this.size;
}

dequeue(){
    if(this.size === 0)
    return false;
    var node = this.first;
    if(this.first === this.last)
    this.last = null;
    this.first = node.next;
    this.size--;
    return node.val;
}
traverse(){
  let temp = this.first;
  const arr = [];
  while(temp){
    arr.push(temp.val);
    temp = temp.next;
  }
  return arr;
}
}



/* Big O

insertion O(1)

removal O(1)

searching O(N)

Accessing O(N)

*/
