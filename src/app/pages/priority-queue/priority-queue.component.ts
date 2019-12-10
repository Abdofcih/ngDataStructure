import { Component, OnInit } from '@angular/core';
import { PriorityQueue } from 'src/app/DS-models/priority-queue';

@Component({
  selector: 'app-priority-queue',
  templateUrl: './priority-queue.component.html',
  styleUrls: ['./priority-queue.component.css']
})
export class PriorityQueueComponent implements OnInit {

  constructor(public pq: PriorityQueue) { }

  ngOnInit() {
       /* init Queue values */
       if(this.pq.size() <= 0 ){ // this code run to the same stack every time component is init so I put if to run one time
        this.pq.enqueue("10",10);
        this.pq.enqueue("8",8);
        this.pq.enqueue("9",9);
        this.pq.enqueue("1",1);
        this.pq.enqueue("2",2);
        }
  }

  enqueue(val,priority){this.pq.enqueue(val,parseInt(priority))}
  dequeue(){console.log(this.pq.dequeue());
  }

}
