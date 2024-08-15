import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { LinkComponent } from '../../atoms/link/link.component';

@Component({
  selector: 'app-landing-project-card',
  standalone: true,
  imports: [LinkComponent, SvgIconComponent],
  templateUrl: './landing-project-card.component.html',
  styleUrl: './landing-project-card.component.css'
})
export class LandingProjectCardComponent {

}
