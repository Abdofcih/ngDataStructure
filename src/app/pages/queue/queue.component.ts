import { Component, OnInit } from '@angular/core';
import { Queue } from 'src/app/DS-models/queue';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit  {

  constructor(public queue:Queue) {

  }

  ngOnInit() {
    /* init Queue values */
    if(!this.queue.size){ // this code run to the same stack every time component is init so I put if to run one time
    this.queue.enqueue(1);
    this.queue.enqueue(2);
    this.queue.enqueue(3);
    this.queue.enqueue(4);
    }
  }
  enqueue(val){this.queue.enqueue(val)}
  dequeue(){this.queue.dequeue()}

}
