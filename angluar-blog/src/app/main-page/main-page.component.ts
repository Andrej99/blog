import { Component, OnInit } from '@angular/core';


import {PostService} from "../post.service";
import {Post} from "../post";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  posts: Post[] =[];
  top_post?: Post; 


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getTopPosts().subscribe(posts => {
      this.top_post = posts[0];
      this.posts = posts.slice(1);
    });
  }

}
