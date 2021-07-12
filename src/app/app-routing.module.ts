import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbunsComponent } from './pages/albuns/albuns.component';
import { HomeComponent } from './pages/home/home.component';
import { PostDetalhesComponent } from './pages/posts/post-detalhes/post-detalhes.component';
import { PostsComponent } from './pages/posts/posts.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostDetalhesComponent},
  {path: 'albuns', component: AlbunsComponent},
  {path: 'todos', component: TodosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
