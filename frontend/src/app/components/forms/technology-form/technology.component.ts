import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import Skill from '../../../models/Skill';
import { FormsModule } from '@angular/forms';
import { SkillsService } from '../../../services/skills.service';

@Component({
  selector: 'app-technology-form',
  standalone: true,
  imports: [SvgIconComponent, FormsModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {
  model = new Skill('', '')

  constructor(private skillService: SkillsService) { }

  onSubmit() {
    this.skillService.addSkill(this.model)
  }
}
