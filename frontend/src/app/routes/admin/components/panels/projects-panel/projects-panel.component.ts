import { ProjectCardComponent } from '@admincomponents/templates/project-card';
import { Component, OnInit } from '@angular/core';
import Project from '@models/Project';
import { ProjectsService } from '@services/projects.service';

@Component({
    selector: 'app-dashboard-projects-panel',
    imports: [ProjectCardComponent],
    templateUrl: './projects-panel.component.html',
    styleUrl: './projects-panel.component.css'
})
export class ProjectsPanelComponent implements OnInit {
  projects: Project[]
  constructor(private projectsService: ProjectsService) {
    this.projects = []
    this.getProjects()
  }

  ngOnInit() {
    this.projectsService.someChange.subscribe(_ => this.getProjects())
  }

  getProjects(): void {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects
    })
  }
}
