import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '@models/User';
import AppSettings from '../../app.settings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginEndpoint = '/auth/login'
  private registerEndpoint = '/auth/register'

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(AppSettings.API_ENDPOINT + this.loginEndpoint, user)
  }
}
