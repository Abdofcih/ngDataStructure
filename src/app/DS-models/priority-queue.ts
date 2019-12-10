class Node {
  constructor(public value ,public priority){
      this.value = value;
      this.priority = priority;
  }
}
export class PriorityQueue {
  private values;
  constructor(){
      this.values = [];
  }
  size():number{return this.values.length;}
  traverse(){return this.values;}
  enqueue(value, priority){
      const newNode = new Node(value, priority)
      this.values.push(newNode);
      this.bubbleUp();
      return this.values;
  }

  bubbleUp(){
      let index = this.values.length - 1;
      let parent = Math.floor((index-1)/2)
      while(index){
          if(this.values[index].priority > this.values[parent].priority){
              let temp = this.values[index]
              this.values[index] = this.values[parent]
              this.values[parent] = temp;
              index = parent;
              parent = Math.floor((index-1)/2);
          }
         else
         break;
      }
  }

dequeue(){
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
}
sinkDown(){
  let index = 0;
  let length = this.values.length;

   while(true){
      let element = this.values[index]
      let leftChildIndex =  (2*index)+1;
      let rightChildIndex =  (2*index)+2;
      let leftChild , rightChild;
      let Greater = null;

       if(leftChildIndex < length){
          leftChild = this.values[leftChildIndex];
          if(leftChild.priority > element.priority)
            Greater = leftChildIndex;
       }
       if(rightChildIndex < length){
           rightChild = this.values[rightChildIndex]
          if((Greater === null && rightChild.priority > element.priority)
                  ||
          (Greater !== null && rightChild.priority > leftChild.priority) )
           Greater = rightChildIndex;
       }
       if(Greater === null) break;
        this.values[index] = this.values[Greater];
        this.values[Greater] = element;
        index = Greater;
   }
}
}
//[55,41,39,33,18,27,12]
//  0  1  2  3  4  5  6
/*
insertion O(logN)
removal O(logN)

searching O(logN)
*/
