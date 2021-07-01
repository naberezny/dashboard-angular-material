import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: any = [];
  
  constructor(private appService: AppService) { }

  async ngOnInit() {
    console.log('iniciou todo');
    
    this.todos = await this.appService.getApi('todos');
    // console.log(this.todos);
  }

  alterouTarefa(id){
    console.log(id);
  }

}
