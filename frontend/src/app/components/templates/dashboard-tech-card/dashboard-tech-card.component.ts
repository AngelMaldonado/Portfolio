import { Component } from '@angular/core';
import { SvgIconComponent, SvgIcons } from '@ngneat/svg-icon';


@Component({
  selector: 'app-dashboard-tech-card',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './dashboard-tech-card.component.html',
  styleUrl: './dashboard-tech-card.component.css'
})
export class DashboardTechCardComponent {
}
