import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Skill from '../models/Skill';
import AppSettings from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  addSkill(skill: Skill) {
    this.http.post(AppSettings.API_ENDPOINT + '/skills', skill)
      .subscribe({
        next: () => console.log('Skill added'),
        error: (error) => console.log('Error adding skill', error)
      })
  }
}
