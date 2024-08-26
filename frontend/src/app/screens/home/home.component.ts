import { Component } from '@angular/core';
import { LinkComponent } from '../../components/atoms/link/link.component';
import { LandingIconLinkComponent } from '../../components/atoms/landing-icon-link/landing-icon-link.component';
import { LandingProjectCardComponent } from '../../components/templates/landing-project-card/landing-project-card.component';
import { LandingTechCardComponent } from '../../components/templates/landing-tech-card/landing-tech-card.component';
import Skill from '../../models/Skill';
import { SkillsService } from '../../services/skills.service';
import { ProjectsService } from '../../services/projects.service';
import Project from '../../models/Project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingTechCardComponent, LandingProjectCardComponent, LandingIconLinkComponent, LinkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  techs: Skill[] = []
  projects: Project[] = []
  constructor(private skillsService: SkillsService, private projectsService: ProjectsService) {
    skillsService.getSkills().subscribe(skills => this.techs = skills)
    projectsService.getProjects().subscribe(projects => this.projects = projects)
  }
}
