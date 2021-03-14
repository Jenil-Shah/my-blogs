import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {BlogPost} from '../BlogPost';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit, OnDestroy {

  post: BlogPost;

  querySub: any;

  constructor(private data: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getPostById(params['id']).subscribe(data => this.post = data);
    });
  }

  ngOnDestroy(): void{
    if(this.querySub) this.querySub.unsubscribe();
  }

}
