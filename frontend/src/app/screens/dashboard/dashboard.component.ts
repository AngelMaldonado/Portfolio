import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardTechsPanelComponent } from "../../components/dashboard-techs-panel/dashboard-techs-panel.component";
import { DashboardProjectsPanelComponent } from '../../components/dashboard-projects-panel/dashboard-projects-panel.component';

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
