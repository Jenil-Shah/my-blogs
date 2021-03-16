import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {BlogPost} from '../BlogPost';
import {PostService} from '../post.service';


@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {

  blogPosts: Array<BlogPost> = [];
  sub: any;


  constructor(private data: PostService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.data.getAllPosts().subscribe(data => this.blogPosts = data);
  }

  rowClicked(e, id)
  {
    this.router.navigate(['/admin/post', id]);
    e.preventDefault();
  }

}
