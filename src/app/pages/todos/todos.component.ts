import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  completed: boolean;
  todos: any = [];
  listTodos: any = [];
  checkedItens: number = 0;

  qtde_itens = 20;
  limit_page = this.qtde_itens;
  page = 1;
  params: any;

  async getItens() {
    // this.params = '?page='+this.page+'&_limit='+ this.limit_page;
    this.params = '';
    this.todos = await this.appService.getApi('todos' + this.params);
    this.listTodos = this.todos.filter(f => f.id <= (this.page * this.qtde_itens) && f.id > (this.page - 1 * this.qtde_itens))
    this.checkedItens = this.todos.filter(f => f.completed).length;
  }

  carregarMaisItens() {
    this.page++;
    this.limit_page += this.qtde_itens;
    this.getItens();
  }

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getItens();

  }

  alterouTarefa(id) {
    console.log(id);
  }

  changePage(pageNumber) {
    this.page = pageNumber;
    this.listTodos = [];

    this.listTodos = this.todos.filter(f => f.id <= (this.page * this.qtde_itens) && f.id > ((this.page - 1) * this.qtde_itens));
    console.log(this.listTodos);
    
  }

  counter(i: number) {
    return new Array(i);
  }

  changeCheck(event){
    if(!event.checked){
      this.checkedItens--;
    }else{
      this.checkedItens ++;
    }
    
  }
}
