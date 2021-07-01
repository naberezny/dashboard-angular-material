import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  albuns: any = [];

  limit_page = 9;
  page=1;
  params: any;

  async getItens(){
    this.params = '?page='+this.page+'&_limit='+ this.limit_page;
    this.albuns = await this.appService.getApi('albums'+this.params);
    // this.albuns = Object.assign({}, this.albuns);
  }

  adicionaMaisUmaPagina(){
    this.page++;
    this.limit_page += 9;
    this.getItens();
  }
  
  constructor(private appService: AppService) { }

  ngOnInit() {
    // console.log('iniciou albuns');
    this.getItens();
    
    console.log(this.albuns);
  }

}
