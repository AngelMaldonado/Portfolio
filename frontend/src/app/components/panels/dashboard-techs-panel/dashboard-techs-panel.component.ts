import { Component, OnInit } from '@angular/core';
import { DashboardTechCardComponent } from '../../templates/dashboard-tech-card/dashboard-tech-card.component';
import { SkillsService } from '../../../services/skills.service';
import Skill from '../../../models/Skill';

@Component({
  selector: 'app-dashboard-techs-panel',
  standalone: true,
  imports: [DashboardTechCardComponent],
  templateUrl: './dashboard-techs-panel.component.html',
  styleUrl: './dashboard-techs-panel.component.css'
})
export class DashboardTechsPanelComponent implements OnInit {
  skills: Skill[]
  constructor(private skillsService: SkillsService) {
    this.skills = []
    this.getTechs()
  }

  ngOnInit() {
    this.skillsService.someChange.subscribe(_ => this.getTechs())
  }

  getTechs(): void {
    this.skillsService.getSkills().subscribe(skills => this.skills = skills)
  }
}
