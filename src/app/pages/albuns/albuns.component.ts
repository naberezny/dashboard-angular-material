import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  albuns: any = [];
  
  constructor(private appService: AppService) { }

  async ngOnInit() {
    // console.log('iniciou albuns');
    
    this.albuns = await this.appService.getApi('albums');
    console.log(this.albuns);
  }

}
