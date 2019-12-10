export class QueueArr {
  storage;
  constructor(){
    this.storage = [];
}
enqueue(val){return this.storage.push(val)}
dequeue(){return this.storage.shift()}

traverse(){
    if(this.storage.length === 0)
     return false;

     return this.storage;
}
}
