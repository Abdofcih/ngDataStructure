class Node {
  left:Node;
  right:Node;
  constructor(public val){
      this.val = val;
      this.left = null;
      this.right = null;
  }
}
export class BinarySearchTree{
  root:Node;
  constructor(){
      this.root = null;
  }
  insert(val){
      var newNode = new Node(val);
      if(!this.root)
       {
          this.root = newNode;
          return this;
       }
       else{
           var tracker = this.root;
           while(tracker){ //return will break it
              if(val === tracker.val) return false;
              if(val < tracker.val){
                  //go left
                  if(!tracker.left){
                      tracker.left = newNode;
                      return this;
                  }
                      tracker = tracker.left;
              }
             else if(val > tracker.val){
                  //go right
                  if(!tracker.right){
                      tracker.right = newNode;
                      return this;
                  }
                      tracker = tracker.right;
              }
           }

       }
  }

  find(val){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
          if(val < current.val){
              current = current.left;
          } else if(val > current.val){
              current = current.right;
          } else {
              found = true;
          }
      }
      if(!found) return undefined;
      return current;
  }
  BFS(){
      var node = this.root , data = [] , queue = [];
      queue.push(node);
      while(queue.length){
          node = queue.shift();
          data.push(node.val);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
      return data;
  }
  DFS_pre_stack(){
      var node = this.root , data = [] ,  stack = [] ;
       stack.push(node);
       while(stack.length){
           node = stack.pop();
           data.push(node.val);
           if(node.right) stack.push(node.right); //so on pop left poped before right => stack is LIFO
           if(node.left) stack.push(node.left);

       }
       return data;
  }
  DFS_pre(){
      var node = this.root ;
      var  data = [] ;
      function traverse(node){
          data.push(node.val);
          if(node.left) traverse(node.left);
           if(node.right) traverse(node.right);
      }
      traverse(node); // we can delete node local var and use this.root
      return data;
  }

  DFS_post(){
      var node = this.root ;
      var  data = [] ;
      function traverse(node){
           if(node.left) traverse(node.left);
           if(node.right) traverse(node.right);
           data.push(node.val);
      }
      traverse(node); // we can delete node local var and use this.root
      return data;
  }
  DFS_in(){
      var node = this.root ;
      var  data = [] ;
      function traverse(node){
           if(node.left) traverse(node.left);
           data.push(node.val);
           if(node.right) traverse(node.right);

      }
      traverse(node); // we can delete node local var and use this.root
      return data;
  }

}
/*
insertion O(logN)

searching O(logN)
*/





