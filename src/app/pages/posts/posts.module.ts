import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PostDetalhesComponent } from './post-detalhes/post-detalhes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PostsComponent,
    PostDetalhesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule
  ],
  exports:[PostsComponent]
})
export class PostsModule { }
