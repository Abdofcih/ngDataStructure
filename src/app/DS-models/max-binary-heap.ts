export class MaxBinaryHeap{
  values;
  constructor(){
      this.values = [];
  }

  insert(value){
      this.values.push(value);
      this.bubbleUp();
      return this.values
  }

  bubbleUp(){
      let index = this.values.length - 1;
      let value = this.values[index];
      let parent = Math.floor((index-1)/2)
      while(index){
          if(this.values[index] > this.values[parent]){
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

ServeMax(){
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
          if(leftChild > element)
            Greater = leftChildIndex;
       }
       if(rightChildIndex < length){
           rightChild = this.values[rightChildIndex]
          if((Greater === null && rightChild > element) || (Greater !== null && rightChild > leftChild) )
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
