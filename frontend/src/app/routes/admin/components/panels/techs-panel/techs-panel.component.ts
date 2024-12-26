import { Component, OnInit } from '@angular/core';
import { TechCardComponent } from '../../templates/tech-card/tech-card.component';
import { SkillsService } from '@services/skills.service';
import Skill from '@models/Skill';

@Component({
    selector: 'app-dashboard-techs-panel',
    imports: [TechCardComponent],
    templateUrl: './techs-panel.component.html',
    styleUrl: './techs-panel.component.css'
})
export class TechPanelComponent implements OnInit {
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
