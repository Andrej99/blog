import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PostService } from "../post.service";
import {FullPost} from "../fullpost";


@Component({
  selector: 'app-post-full',
  templateUrl: './post-full.component.html',
  styleUrls: ['./post-full.component.css']
})
export class PostFullComponent implements OnInit {
  post?:FullPost;

  getPost():void{
    const id = String(this.route.snapshot.paramMap.get("id"));
    this.postService.getFullPost(id).subscribe(post => this.post = post);
  }

  goBack():void{
    this.location.back();
  }

  constructor(private route: ActivatedRoute, private postService: PostService, private location:Location ) { }

  ngOnInit(): void {
    this.getPost();
  }


}
