import { Component, OnInit } from '@angular/core';
import { SinglyLinkedList } from 'src/app/DS-models/singly-linked-list';

@Component({
  selector: 'app-singly-list',
  templateUrl: './singly-list.component.html',
  styleUrls: ['./singly-list.component.css']
})
export class SinglyListComponent implements OnInit {
 getValue;
  constructor(public singlyLinkedList:SinglyLinkedList) { }

  ngOnInit() {
       /* init Queue values */
       if(!this.singlyLinkedList.length){ // this code run to the same stack every time component is init so I put if to run one time
        this.singlyLinkedList.push(1);
        this.singlyLinkedList.push(2);
        this.singlyLinkedList.push(3);
        this.singlyLinkedList.push(4);
        }
  }
  push(val){this.singlyLinkedList.push(val)}
  pop(){this.singlyLinkedList.pop()}

  unshift(val){this.singlyLinkedList.unshift(val)}
  shift(){this.singlyLinkedList.shift()}

  get(i){ this.getValue = this.singlyLinkedList.get(parseInt(i))}
  remove(i){this.singlyLinkedList.remove(parseInt(i))}

  set(i,val){this.singlyLinkedList.set(parseInt(i),val)}
  insert(i,val){this.singlyLinkedList.insert(parseInt(i),val)}

}
