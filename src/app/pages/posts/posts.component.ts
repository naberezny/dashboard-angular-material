import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];
  
  constructor(private appService: AppService) { }

  async ngOnInit() {
    console.log('iniciou posts');
    
    this.posts = await this.appService.getApi('posts');
    console.log(this.posts);
  }

}
