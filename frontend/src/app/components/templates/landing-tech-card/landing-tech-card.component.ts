import { Component, Input } from '@angular/core';
import Skill from '../../../models/Skill';

@Component({
  selector: 'app-landing-tech-card',
  standalone: true,
  imports: [],
  templateUrl: './landing-tech-card.component.html',
  styleUrl: './landing-tech-card.component.css'
})
export class LandingTechCardComponent {
  @Input({ required: true }) tech!: Skill;
}
