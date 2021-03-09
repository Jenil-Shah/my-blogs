import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

import {BlogPost} from './BlogPost';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(page, tag, category): Observable<BlogPost[]>
  {
    let params = {
      page: page,
      perPage: perPage.toString()
    }

    if(tag != null || tag != undefined)
    {
      params['tag'] = tag;
    }

    if(category != null || category != undefined)
    {
      params['category'] = category;
    }

    return this.http.get<BlogPost[]>(`https://sleepy-sierra-03212.herokuapp.com/api/posts`,{ params });
  }

  getPostById(id): Observable<BlogPost>
  {
    return this.http.get<BlogPost>(`https://sleepy-sierra-03212.herokuapp.com/api/posts/${id}`);
  }

  getCategories(): Observable<any>
  {
    return this.http.get<any>(`https://sleepy-sierra-03212.herokuapp.com/api/categories`);
  }

  getTags(): Observable<string[]>
  {
    return this.http.get<string[]>(`https://sleepy-sierra-03212.herokuapp.com/api/tags`);
  }
}
