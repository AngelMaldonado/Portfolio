import { Component } from '@angular/core';
import { Project, Skill } from '@models/index';
import { ProjectsService, SkillsService } from '@services/index';
import { LandingProjectCardComponent } from '@shared/components/templates/landing-project-card/landing-project-card.component';
import { LandingIconLinkComponent, LinkComponent } from '@shared/components/ui';
import { LandingTechCardComponent } from './components/templates/tech-card/tech-card.component';

@Component({
    selector: 'app-home',
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
