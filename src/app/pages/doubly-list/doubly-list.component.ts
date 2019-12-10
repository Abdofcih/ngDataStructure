import { Component, OnInit } from '@angular/core';
import { DouplyLinkedList } from 'src/app/DS-models/douply-linked-list';

@Component({
  selector: 'app-doubly-list',
  templateUrl: './doubly-list.component.html',
  styleUrls: ['./doubly-list.component.css']
})
export class DoublyListComponent implements OnInit {

  getValue;
  constructor(public douplyLinkedList:DouplyLinkedList) { }

  ngOnInit() {
       /* init Queue values */
       if(!this.douplyLinkedList.length){ // this code run to the same stack every time component is init so I put if to run one time
        this.douplyLinkedList.push(1);
        this.douplyLinkedList.push(2);
        this.douplyLinkedList.push(3);
        this.douplyLinkedList.push(4);
        }
  }
  push(val){this.douplyLinkedList.push(val)}
  pop(){this.douplyLinkedList.pop()}

  unshift(val){this.douplyLinkedList.unshift(val)}
  shift(){this.douplyLinkedList.shift()}

  get(i){ this.getValue = this.douplyLinkedList.get(parseInt(i))}
  remove(i){this.douplyLinkedList.remove(parseInt(i))}

  set(i,val){this.douplyLinkedList.set(parseInt(i),val)}
  insert(i,val){this.douplyLinkedList.insert(parseInt(i),val)}
}
