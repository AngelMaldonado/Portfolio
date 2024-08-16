import { Component } from '@angular/core';
import { LinkComponent } from "../../atoms/link/link.component";
import { BadgeComponent } from "../../atoms/badge/badge.component";
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  selector: 'app-dashboard-post-card',
  standalone: true,
  imports: [LinkComponent, BadgeComponent, SvgIconComponent],
  templateUrl: './dashboard-post-card.component.html',
  styleUrl: './dashboard-post-card.component.css'
})
export class DashboardPostCardComponent {

}
