import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsComponent } from './albuns.component';
import { MatCardModule, MatPaginatorModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [AlbunsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  exports:[
    AlbunsComponent
  ]
})
export class AlbunsModule { }
