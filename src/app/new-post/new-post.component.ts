import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

import {BlogPost} from '../BlogPost';
import {PostService} from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit, OnDestroy {

  blogPost: BlogPost = new BlogPost();
  tags: String;

  sub: any;

  constructor(private data: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit(f: NgForm): void
  {
    this.blogPost.tags = this.tags.split(",").map(tags => tags.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = "WEB422 Student";
    this.blogPost.views = 0;

    this.sub = this.data.newPost(this.blogPost).subscribe(() => this.router.navigate(['admin']));
  }

  ngOnDestroy(): void
  {
    if(this.sub) this.sub.unsubscribe();
  }

}
