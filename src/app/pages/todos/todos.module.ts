import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos.component';
import { MatCardModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  exports: [
    TodosComponent
  ],
  providers: []
})
export class TodosModule { }
