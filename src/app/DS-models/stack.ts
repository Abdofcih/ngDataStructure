class Node{
  next:Node;
  constructor(public val){
      this.val = val;
      this.next = null;
  }
}

export class Stack {
  public first:Node;
  public last:Node;
  public size:number;

  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){
      let newNode = new Node(val);
      if(this.size === 0)
      {
          this.first = newNode;
          this.last = newNode;
      }else{
          newNode.next = this.first;
          this.first = newNode;
      }
      return ++this.size;
  }
  pop(){
      if(this.size === 0)
      return null;

      var temp = this.first;
      if(this.size === 1)
        {
          //   this.first = null; already done below if condition
            this.last = null;
        }
        this.first = temp.next;
        this.size--;
        return temp.val;
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
