import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
/*Components to be declared */
import { AppComponent } from './app.component';
import { NavComponent } from './partials/nav/nav.component';
import { StackComponent } from './pages/stack/stack.component';
import { QueueComponent } from './pages/queue/queue.component';
import { PriorityQueueComponent } from './pages/priority-queue/priority-queue.component';
import { SinglyListComponent } from './pages/singly-list/singly-list.component';
import { DoublyListComponent } from './pages/doubly-list/doubly-list.component';
import { HashTableComponent } from './pages/hash-table/hash-table.component';
import { BSTComponent } from './pages/bst/bst.component';
import { GraphComponent } from './pages/graph/graph.component';
import { MaxBinaryHeapComponent } from './pages/max-binary-heap/max-binary-heap.component';
/*Classes to be provided */
import { Stack } from './DS-models/stack';
import { StackArr } from './DS-models/stack-arr';
import { Queue } from './DS-models/queue';
import { QueueArr } from './DS-models/queue-arr';
import { PriorityQueue } from './DS-models/priority-queue';
import { DouplyLinkedList } from './DS-models/douply-linked-list';
import { SinglyLinkedList } from './DS-models/singly-linked-list';
import { HashTable } from './DS-models/hash-table';
import { BinarySearchTree } from './DS-models/binary-search-tree';
import { MaxBinaryHeap } from './DS-models/max-binary-heap';
import { Graph } from './DS-models/graph';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StackComponent,
    QueueComponent,
    PriorityQueueComponent,
    SinglyListComponent,
    DoublyListComponent,
    HashTableComponent,
    BSTComponent,
    GraphComponent,
    MaxBinaryHeapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Stack,
              StackArr,
              Queue,
              QueueArr,
              PriorityQueue,
              DouplyLinkedList,
              SinglyLinkedList,
              HashTable,
              BinarySearchTree,
              MaxBinaryHeap,
              Graph],
  bootstrap: [AppComponent]
})
export class AppModule { }
