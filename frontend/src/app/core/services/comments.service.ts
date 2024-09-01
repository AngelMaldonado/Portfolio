import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import AppSettings from '../../app.settings';
import Comment from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private endpoint = '/comments'
  private changed: Subject<Comment>

  constructor(private http: HttpClient) {
    this.changed = new Subject<Comment>()
  }

  get someChange() {
    return this.changed as Observable<Comment>
  }

  getComments() {
    return this.http.get<Comment[]>(AppSettings.API_ENDPOINT + this.endpoint);
  }

  addComment(comment: Comment) {
    this.http.post(AppSettings.API_ENDPOINT + this.endpoint, comment)
      .subscribe({
        next: response => this.changed.next(response as Comment),
        error: error => console.log('Error adding comment ', error)
      })
  }

  setComment(comment: Comment) {
    this.http.put(AppSettings.API_ENDPOINT + this.endpoint, comment)
      .subscribe({
        next: response => this.changed.next(response as Comment),
        error: error => console.log('Error updating comment ', error)
      })
  }

  deleteComment(id: string) {
    this.http.delete(AppSettings.API_ENDPOINT + this.endpoint + `/${id}`)
      .subscribe({
        next: response => this.changed.next(response as Comment),
        error: error => console.log('Error deleting comment ', error)
      })
  }
}
