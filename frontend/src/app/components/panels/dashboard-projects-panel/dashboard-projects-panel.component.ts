import { Component } from '@angular/core';
import { DashboardProjectCardComponent } from "../../templates/dashboard-project-card/dashboard-project-card.component";

@Component({
  selector: 'app-dashboard-projects-panel',
  standalone: true,
  imports: [DashboardProjectCardComponent],
  templateUrl: './dashboard-projects-panel.component.html',
  styleUrl: './dashboard-projects-panel.component.css'
})
export class DashboardProjectsPanelComponent {

}
