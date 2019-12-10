import { Component, OnInit } from '@angular/core';
import { BinarySearchTree } from 'src/app/DS-models/binary-search-tree';

@Component({
  selector: 'app-bst',
  templateUrl: './bst.component.html',
  styleUrls: ['./bst.component.css']
})
export class BSTComponent implements OnInit {

  constructor( public pst:BinarySearchTree) { }

  ngOnInit() {
    if(!this.pst.root){
        this.pst.insert(20);
        this.pst.insert(25);
        this.pst.insert(27);
        this.pst.insert(30);
        this.pst.insert(15);
        this.pst.insert(10);
        this.pst.insert(17);
        this.pst.insert(7);
        console.log(this.pst.BFS());

    }
    /*
                20
            15        25
        10    17       27
        7                30
        BFC                       => [20,15,25,10,17,27,7,30]
        DFS_pre &  DFS_pre_stack  => [20,15,10,7,17,25,27,30]
        DFS_post                  => [7,10,17,15,30,27,25,20]
        DFS_in                    => [7,10,15,17,20,25,27,30]
    */
  }
  insert(value){
   this.pst.insert(value);
  }
}
