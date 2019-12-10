class Node{
  next:Node;
  prev:Node
  constructor( public val){
      this.next = null;
      this.prev = null;
      this.val = val;
  }
}

export class DouplyLinkedList{
  head:Node;
  tail:Node ;
  length:number ;
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
      }else{
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      return ++this.length;

  }

  pop(){
      if(!this.head)
      return undefined;

      var temp = this.tail;

      if(this.length === 1)
      this.head = null;
      else{
          this.tail.next = null;
          temp.prev = null;
      }
      this.tail = this.tail.prev;


      this.length--;
      return temp;
  }
  shift(){
      if(!this.head)
      return undefined;
      var temp = this.head;
      if(this.length === 1){
        this.head = null;
        this.tail = null;
      }else{
          this.head = this.head.next;
          this.head.prev = null;
          temp.next = null;
      }
       this.length--;
      return temp;
  }

  unshift(val){
      var newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = newNode;
      }else{
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
      }
      return ++this.length;
  }

  get(index){
      if(index == undefined || index<0 || index>=this.length)
      return null;

      var half = this.length/2;



      if(index <= half){
          var counter = 0;
          var current = this.head;
          while(counter != index){
              current = current.next;
              counter++;
          }
      }
      else{
          var counter = this.length-1;
          var current = this.tail;
          while(counter != index){
              current = current.prev;
              counter--;
          }
      }
      return current;
  }

  set(index,val){
      var foundedNode = this.get(index);
      if(foundedNode != null)
      {
          foundedNode.val = val;
          return true;
      }
      return false
  }

  insert(index,val){
      if(index < 0 || index > this.length)
          return false;

      else if(index === 0)
         return  this.unshift(val);

      else if(index === this.length)
         return this.push(val);


      var newNode = new Node(val);

      var before = this.get(index-1);
      var after = this.get(index);

      newNode.next = after;
      after.prev = newNode;
      newNode.prev = before;
      before.next = newNode;


      return ++this.length;
  }

  remove(index){
      if(index < 0   || index >= this.length)
      return undefined;

      if(index === 0)
      return this.shift();

      if(index === this.length-1)
      return this.pop();

      var deleted = this.get(index);

      deleted.prev.next = deleted.next;
      deleted.next.prev = deleted.prev;

      deleted.next = null;
      deleted.prev =null;

      return deleted;

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

searching O(N) => O(N/2) is still O(N)

Accessing O(N)

*/
