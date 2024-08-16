import { Component } from '@angular/core';
import { DashboardUserCardComponent } from "../../templates/dashboard-user-card/dashboard-user-card.component";

@Component({
  selector: 'app-dashboard-users-panel',
  standalone: true,
  imports: [DashboardUserCardComponent, DashboardUserCardComponent],
  templateUrl: './dashboard-users-panel.component.html',
  styleUrl: './dashboard-users-panel.component.css'
})
export class DashboardUsersPanelComponent {

}
