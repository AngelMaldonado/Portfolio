import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { LinkComponent } from '../../atoms/link/link.component';

@Component({
  selector: 'app-dashboard-navbar',
  standalone: true,
  imports: [LinkComponent, SvgIconComponent],
  templateUrl: './dashboard-navbar.component.html',
  styleUrl: './dashboard-navbar.component.css'
})
export class DashboardNavbarComponent {
  expanded: boolean = false
}
