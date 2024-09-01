import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import User from '../models/User';
import AppSettings from '../../app.settings';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private endpoint = '/users'
  private changed: Subject<User>

  constructor(private http: HttpClient) {
    this.changed = new Subject<User>()
  }

  get someChange() {
    return this.changed as Observable<User>
  }

  getUsers() {
    return this.http.get<User[]>(AppSettings.API_ENDPOINT + this.endpoint);
  }

  addUser(user: User) {
    this.http.post(AppSettings.API_ENDPOINT + this.endpoint, user)
      .subscribe({
        next: response => this.changed.next(response as User),
        error: error => console.log('Error adding user ', error)
      })
  }

  setUser(user: User) {
    this.http.put(AppSettings.API_ENDPOINT + this.endpoint, user)
      .subscribe({
        next: response => this.changed.next(response as User),
        error: error => console.log('Error updating user ', error)
      })
  }

  deleteUser(id: string) {
    this.http.delete(AppSettings.API_ENDPOINT + this.endpoint + `/${id}`)
      .subscribe({
        next: response => this.changed.next(response as User),
        error: error => console.log('Error deleting user ', error)
      })
  }
}
