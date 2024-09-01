import { PostsPanelComponent, ProjectsPanelComponent, TechPanelComponent, UsersPanelComponent } from '@admincomponents/panels';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TechPanelComponent, ProjectsPanelComponent, PostsPanelComponent, UsersPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(protected router: Router) { }
}
