import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Project from '../models/Project';
import { HttpClient } from '@angular/common/http';
import AppSettings from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private endpoint = '/projects'
  private changed: Subject<Project>

  constructor(private http: HttpClient) {
    this.changed = new Subject<Project>()
  }

  get someChange() {
    return this.changed as Observable<Project>
  }

  getProjects() {
    return this.http.get<Project[]>(AppSettings.API_ENDPOINT + this.endpoint);
  }

  addProject(project: Project) {
    this.http.post(AppSettings.API_ENDPOINT + this.endpoint, project)
      .subscribe({
        next: response => this.changed.next(response as Project),
        error: error => console.log('Error adding project ', error)
      })
  }

  setProject(project: Project) {
    this.http.put(AppSettings.API_ENDPOINT + this.endpoint, project)
      .subscribe({
        next: response => this.changed.next(response as Project),
        error: error => console.log('Error updating project ', error)
      })
  }

  deleteProject(id: string) {
    this.http.delete(AppSettings.API_ENDPOINT + this.endpoint + `/${id}`)
      .subscribe({
        next: response => this.changed.next(response as Project),
        error: error => console.log('Error deleting project ', error)
      })
  }
}
