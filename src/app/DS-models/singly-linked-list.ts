
class Node {
  next:Node;
  constructor(public val) {
  this.val = val;
  this.next = null;
  }
}

export  class SinglyLinkedList {
  head:Node;
  tail:Node;
  length:number;
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val){
      var newNode = new Node(val);
     if(!this.head){
         this.head = newNode;
         this.tail = newNode;
     }
     else {
         this.tail.next = newNode;
         this.tail = newNode;
     }
     this.length++;
     return this;
  }
  pop(){
      if(!this.head)
          return undefined ;
      var current = this.head;
      var newTail = current;
      while(current.next)
      {
         newTail = current;
         current = current.next;
      }
       this.tail = newTail;
       this.tail.next = null;
       this.length--;
       if(this.length === 0){
           this.head = null;
           this.tail = null;
       }
     return current;
  }
  shift(){
      if(!this.head)
          return undefined ;
      var current = this.head;
      this.head = this.head.next
      this.length--;
      return current;
  }
  unshift(val){
      var newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = newNode;
      }
      else{ //else here to aviod infinte (newNode)=>(head)=>(newNode)(head)=>(newNode).....
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
      return this;
  }
  get(index){
      if( !index|| index<0 || index >= this.length)
          return undefined;
      var counter = 0;
      var current = this.head;
      while(counter !== index){
          current = current.next;
          counter++;
      }
    return current;
  }
  set(index,val){
     var getNode =  this.get(index);
     if(getNode)
     {
         getNode.val = val;
         return true;
     }
     return false;
  }
  insert(index,val){
      if( !index|| index<0 || index > this.length)
          return false;
       if (index === this.length)
          return !!this.push(val);
       if (index === 0)
          return !!this.unshift(val);

          var newNode = new Node(val);
          var pre =  this.get(index-1);
          newNode.next=pre.next;
          pre.next = newNode;

          this.length++;
          return true;
  }
  remove(index){
      if( !index|| index<0 || index>=this.length)
          return false;
      if (index === this.length-1)
          return this.pop();
      if (index === 0)
          return this.shift();

      var getNode = this.get(index-1);
      getNode.next = getNode.next.next;
      this.length--
      return true
  }
  reverse(){
      var pre = null;
      var next ;
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      for (var i=0 ; i<this.length ; i++)
      {
          next = node.next;
          node.next = pre;
          pre = node;
          node = next;
      }
      return this;
  }
  traverse(){
      var arr = [];
      var current = this.head;
      while (current){
          arr.push(current.val);
          current = current.next;
      }
      return arr
  }

}
/* Big O
insertion O(1)

removal
        if(index===0 || index=this.length-1)
        O(1)
        else O(N)

searching O(N)

Accessing O(N)

 */
