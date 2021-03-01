import { Component, OnInit } from '@angular/core';

import blogData from '../blogData.json';
import {BlogPost} from '../BlogPost';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  posts: Array<BlogPost> = blogData.slice(0,3);

  constructor() { }

  ngOnInit(): void {
  }

}
