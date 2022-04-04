import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PostService } from "../post.service";

import {Post} from "../post";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: Post[] = [];

  getPosts(): void{
   this.postService.getPosts().subscribe(posts => this.posts = posts);

  }

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

}
