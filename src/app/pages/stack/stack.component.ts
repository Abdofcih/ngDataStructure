import { Component, OnInit } from '@angular/core';
import { Stack } from 'src/app/DS-models/stack';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
 val:number;
  constructor(public stack:Stack) {}

  ngOnInit() {
      /* init stack values */
       if(!this.stack.size){ // this code run to the same stack every time component is init so I put if to run one time
        this.stack.push(0);
        this.stack.push(1);
        this.stack.push(2);
       }

  }
  push(val){this.stack.push(val)}
  pop(val){this.stack.pop()}

}
