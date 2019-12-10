import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 ds =[
   {title:"Stack",routerLink:"stack",demoAvailable:true},
   {title:"Queue",routerLink:"queue",demoAvailable:true},
   {title:"Priority Queue",routerLink:"priority-queue",demoAvailable:true},
   {title:"Singly Linked List",routerLink:"singly-list",demoAvailable:true},
   {title:"Doubly Linked List",routerLink:"doubly-list",demoAvailable:true},
   {title:"Hash Table",routerLink:"hash-table",demoAvailable:false},
   {title:"Binary Search Tree",routerLink:"bst",demoAvailable:true},
   {title:"Max Binary Heap",routerLink:"max-binary-heap",demoAvailable:false},
   {title:"Graph",routerLink:"graph",demoAvailable:false},
 ]
  constructor() { }

  ngOnInit() {
  }

}
