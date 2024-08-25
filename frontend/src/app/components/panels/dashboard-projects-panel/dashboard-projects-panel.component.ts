import { Component, OnInit } from '@angular/core';
import { DashboardProjectCardComponent } from "../../templates/dashboard-project-card/dashboard-project-card.component";
import Project from '../../../models/Project';
import { ProjectsService } from '../../../services/projects.service';

@Component({
  selector: 'app-dashboard-projects-panel',
  standalone: true,
  imports: [DashboardProjectCardComponent],
  templateUrl: './dashboard-projects-panel.component.html',
  styleUrl: './dashboard-projects-panel.component.css'
})
export class DashboardProjectsPanelComponent implements OnInit {
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
