import { Component, Input } from '@angular/core';
import { SvgIconComponent, SvgIcons } from '@ngneat/svg-icon';
import Skill from '../../../models/Skill';

@Component({
  selector: 'app-dashboard-tech-card',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './dashboard-tech-card.component.html',
  styleUrl: './dashboard-tech-card.component.css'
})
export class DashboardTechCardComponent {
  @Input({ required: true }) skill!: Skill;
}
