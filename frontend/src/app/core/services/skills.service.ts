import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Skill from '../models/Skill';
import AppSettings from '../../app.settings';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private endpoint = '/skills'
  private changed: Subject<Skill>

  constructor(private http: HttpClient) {
    this.changed = new Subject<Skill>()
  }

  get someChange() {
    return this.changed as Observable<Skill>
  }

  getSkills() {
    return this.http.get<Skill[]>(AppSettings.API_ENDPOINT + this.endpoint);
  }

  addSkill(skill: Skill) {
    this.http.post(AppSettings.API_ENDPOINT + this.endpoint, skill)
      .subscribe({
        next: response => this.changed.next(response as Skill),
        error: error => console.log('Error adding skill ', error)
      })
  }

  setSkill(skill: Skill) {
    this.http.put(AppSettings.API_ENDPOINT + this.endpoint, skill)
      .subscribe({
        next: response => this.changed.next(response as Skill),
        error: error => console.log('Error updating skill ', error)
      })
  }

  deleteSkill(id: string) {
    this.http.delete(AppSettings.API_ENDPOINT + this.endpoint + `/${id}`)
      .subscribe({
        next: response => this.changed.next(response as Skill),
        error: error => console.log('Error deleting skill ', error)
      })
  }
}
