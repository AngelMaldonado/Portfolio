import { Component } from '@angular/core';
import { LinkComponent } from '../../components/atoms/link/link.component';
import { LandingIconLinkComponent } from '../../components/atoms/landing-icon-link/landing-icon-link.component';
import { LandingProjectCardComponent } from '../../components/templates/landing-project-card/landing-project-card.component';
import { LandingTechCardComponent } from '../../components/templates/landing-tech-card/landing-tech-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingTechCardComponent, LandingProjectCardComponent, LandingIconLinkComponent, LinkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
