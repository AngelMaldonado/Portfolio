import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardProjectsPanelComponent } from '../../components/panels/dashboard-projects-panel/dashboard-projects-panel.component';
import { DashboardTechsPanelComponent } from '../../components/panels/dashboard-techs-panel/dashboard-techs-panel.component';
import { DashboardPostsPanelComponent } from "../../components/panels/dashboard-posts-panel/dashboard-posts-panel.component";
import { DashboardUsersPanelComponent } from "../../components/panels/dashboard-users-panel/dashboard-users-panel.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardTechsPanelComponent, DashboardProjectsPanelComponent, DashboardPostsPanelComponent, DashboardUsersPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(protected router: Router) { }
}
