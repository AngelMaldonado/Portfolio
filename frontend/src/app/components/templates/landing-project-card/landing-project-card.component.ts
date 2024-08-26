import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { LinkComponent } from '../../atoms/link/link.component';
import Project from '../../../models/Project';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-landing-project-card',
  standalone: true,
  imports: [LinkComponent, SvgIconComponent, DatePipe],
  templateUrl: './landing-project-card.component.html',
  styleUrl: './landing-project-card.component.css'
})
export class LandingProjectCardComponent {
  @Input({ required: true }) project!: Project
}
