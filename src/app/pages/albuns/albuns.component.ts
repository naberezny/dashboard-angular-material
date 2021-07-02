import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  albuns: any = [];

  qtde_itens = 9;
  limit_page = this.qtde_itens;
  page=1;
  params: any;

  async getItens(){
    this.params = '?page='+this.page+'&_limit='+ this.limit_page;
    this.albuns = await this.appService.getApi('albums'+this.params);
    console.log(this.albuns);
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

  ngAfterContentInit(){
  }

}
