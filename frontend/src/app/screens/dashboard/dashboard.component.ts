import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardProjectsPanelComponent } from '../../components/panels/dashboard-projects-panel/dashboard-projects-panel.component';
import { DashboardTechsPanelComponent } from '../../components/panels/dashboard-techs-panel/dashboard-techs-panel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardTechsPanelComponent, DashboardProjectsPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(protected router: Router) { }
}
