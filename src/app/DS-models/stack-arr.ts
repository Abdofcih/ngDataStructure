export class StackArr {
  storage;
  constructor(){
    this.storage = [];
}
push(val){return this.storage.push(val)}
pop(){return this.storage.pop()}

traverse(){
    if(this.storage.length === 0)
     return false;

     return this.storage;
}
}
