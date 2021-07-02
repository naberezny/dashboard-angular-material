import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos.component';
import { MatCardModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  exports: [
    TodosComponent
  ],
  providers: []
})
export class TodosModule { }
