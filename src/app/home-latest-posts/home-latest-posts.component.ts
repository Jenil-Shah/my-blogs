import { Component, OnDestroy, OnInit } from '@angular/core';

import {BlogPost} from '../BlogPost';
import {PostService} from '../post.service';

@Component({
  selector: 'app-home-latest-posts',
  templateUrl: './home-latest-posts.component.html',
  styleUrls: ['./home-latest-posts.component.css']
})
export class HomeLatestPostsComponent implements OnInit, OnDestroy {

  posts: Array<BlogPost>;

  querySub: any;

  constructor(private data: PostService) { }

  ngOnInit(): void {
    this.querySub = this.data.getPosts(1, null, null).subscribe(data => this.posts = data.slice(0, 3));
  }

  ngOnDestroy(): void {
    if(this.querySub) this.querySub.unsubscribe();
  }

}
