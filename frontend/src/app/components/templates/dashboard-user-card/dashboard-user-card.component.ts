import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { BadgeComponent } from "../../atoms/badge/badge.component";

@Component({
  selector: 'app-dashboard-user-card',
  standalone: true,
  imports: [SvgIconComponent, BadgeComponent],
  templateUrl: './dashboard-user-card.component.html',
  styleUrl: './dashboard-user-card.component.css'
})
export class DashboardUserCardComponent {

}
