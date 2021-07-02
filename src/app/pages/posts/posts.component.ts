import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  qtde_itens = 12;
  limit_page = this.qtde_itens;
  page=1;
  params: any;

  async getItens(){
    this.params = '?page='+this.page+'&_limit='+ this.limit_page;
    this.posts = await this.appService.getApi('posts'+this.params);    
    console.log(this.posts);
  }

  carregarMaisItens(){
    this.page++;
    this.limit_page += this.qtde_itens;
    this.getItens();
  }
  
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getItens();    
  }

}
