import { Component } from '@angular/core';
import { Project, Skill } from '@models/index';
import { ProjectsService, SkillsService } from '@services/index';
import { LandingProjectCardComponent } from '@shared/components/templates/landing-project-card/landing-project-card.component';
import { LandingTechCardComponent } from '@shared/components/templates/landing-tech-card/landing-tech-card.component';
import { LandingIconLinkComponent, LinkComponent } from '@shared/components/ui';

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
