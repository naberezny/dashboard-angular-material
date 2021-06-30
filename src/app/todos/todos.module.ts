import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { MatCardModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
