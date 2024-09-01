import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Post from '../models/Post';
import { HttpClient } from '@angular/common/http';
import AppSettings from '../../app.settings';
import Comment from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private endpoint = '/posts'
  private changed: Subject<Post>

  constructor(private http: HttpClient) {
    this.changed = new Subject<Post>()
  }

  get someChange() {
    return this.changed as Observable<Post>
  }

  getComments(id: string) {
    return this.http.get<Comment[]>(AppSettings.API_ENDPOINT + this.endpoint + `/${id}/comments`)
  }

  getPost(id: string) {
    return this.http.get<Post>(AppSettings.API_ENDPOINT + this.endpoint + `/${id}`)
  }

  getPosts() {
    return this.http.get<Post[]>(AppSettings.API_ENDPOINT + this.endpoint);
  }

  addPost(post: Post) {
    this.http.post(AppSettings.API_ENDPOINT + this.endpoint, post)
      .subscribe({
        next: response => this.changed.next(response as Post),
        error: error => console.log('Error adding post ', error)
      })
  }

  setPost(post: Post) {
    this.http.put(AppSettings.API_ENDPOINT + this.endpoint, post)
      .subscribe({
        next: response => this.changed.next(response as Post),
        error: error => console.log('Error updating post ', error)
      })
  }

  deletePost(id: string) {
    this.http.delete(AppSettings.API_ENDPOINT + this.endpoint + `/${id}`)
      .subscribe({
        next: response => this.changed.next(response as Post),
        error: error => console.log('Error deleting post ', error)
      })
  }
}
