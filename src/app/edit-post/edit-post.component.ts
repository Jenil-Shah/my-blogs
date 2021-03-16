import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {BlogPost} from '../BlogPost';
import {PostService} from '../post.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  blogPost: BlogPost;
  tags: String;
  sub: any;

  constructor(private data: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.data.getPostById(this.route.snapshot.params['id']).subscribe(data => {
      this.blogPost = data;
      this.tags = data.tags.toString();
    });
  }

  formSubmit(f: NgForm): void
  {
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());

    this.sub = this.data.updatePostById(this.blogPost._id, this.blogPost).subscribe(() => this.router.navigate(['admin']));
  }

  deletePost(): void
  {
    this.sub = this.data.deletePostById(this.blogPost._id).subscribe(() => this.router.navigate(['admin']));
  }

  ngOnDestroy(): void
  {
    if(this.sub) this.sub.unsubscribe();
  }

}
