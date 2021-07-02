import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsComponent } from './albuns.component';
import { MatCardModule, MatPaginatorModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AlbunsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    FlexLayoutModule
  ],
  exports:[
    AlbunsComponent
  ]
})
export class AlbunsModule { }
