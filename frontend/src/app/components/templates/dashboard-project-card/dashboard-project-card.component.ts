import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { LinkComponent } from '../../atoms/link/link.component';

@Component({
  selector: 'app-dashboard-project-card',
  standalone: true,
  imports: [SvgIconComponent, LinkComponent],
  templateUrl: './dashboard-project-card.component.html',
  styleUrl: './dashboard-project-card.component.css'
})
export class DashboardProjectCardComponent {

}
