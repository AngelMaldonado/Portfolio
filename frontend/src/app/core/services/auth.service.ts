import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '@models/User';
import AppSettings from '../../app.settings';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginEndpoint = '/auth/login'
  private registerEndpoint = '/auth/register'

  constructor(private http: HttpClient) { }

  validateSession() {
    // get the token from local storage
    const token = this.getUser()?.token
    return this.http.get(AppSettings.API_ENDPOINT + '/auth/validate', { headers: { 'Authorization': `Bearer ${token}` } })
  }

  login(user: User) {
    return this.http.post(AppSettings.API_ENDPOINT + this.loginEndpoint, user)
  }

  getUser() {
    if (localStorage.getItem('user'))
      return JSON.parse(localStorage.getItem('user')!) as User
    else return null
  }
}
