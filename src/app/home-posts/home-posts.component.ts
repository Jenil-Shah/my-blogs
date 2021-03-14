import { Component, OnDestroy, OnInit } from '@angular/core';

import {BlogPost} from '../BlogPost';
import {PostService} from '../post.service';

@Component({
  selector: 'app-home-posts',
  templateUrl: './home-posts.component.html',
  styleUrls: ['./home-posts.component.css']
})
export class HomePostsComponent implements OnInit, OnDestroy {

  posts: Array<BlogPost>;

  querySub: any;

  constructor(private data: PostService) { }

  ngOnInit(): void {
    this.querySub = this.data.getPosts(2, null, null).subscribe(data => this.posts = data.slice(3, 6));
  }

  ngOnDestroy(): void {
    if(this.querySub) this.querySub.unsubscribe();
  }

}
