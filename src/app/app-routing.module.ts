import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StackComponent } from './pages/stack/stack.component';
import { QueueComponent } from './pages/queue/queue.component';
import { PriorityQueueComponent } from './pages/priority-queue/priority-queue.component';
import { SinglyListComponent } from './pages/singly-list/singly-list.component';
import { DoublyListComponent } from './pages/doubly-list/doubly-list.component';
import { HashTableComponent } from './pages/hash-table/hash-table.component';
import { BSTComponent } from './pages/bst/bst.component';
import { GraphComponent } from './pages/graph/graph.component';
import { MaxBinaryHeapComponent } from './pages/max-binary-heap/max-binary-heap.component';

const routes: Routes = [
  {path:'', redirectTo:'stack',pathMatch:'full'},
  {path:'stack',component:StackComponent},
  {path:'queue',component:QueueComponent},
  {path:'priority-queue',component:PriorityQueueComponent},
  {path:'singly-list',component:SinglyListComponent},
  {path:'doubly-list',component:DoublyListComponent},
  {path:'hash-table',component:HashTableComponent},
  {path:'bst',component:BSTComponent},
  {path:'graph',component:GraphComponent},
  {path:'max-binary-heap',component:MaxBinaryHeapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
