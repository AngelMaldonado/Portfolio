import { Component } from '@angular/core';
import { DashboardTechCardComponent } from "../dashboard-tech-card/dashboard-tech-card.component";

@Component({
  selector: 'app-dashboard-techs-panel',
  standalone: true,
  imports: [DashboardTechCardComponent],
  templateUrl: './dashboard-techs-panel.component.html',
  styleUrl: './dashboard-techs-panel.component.css'
})
export class DashboardTechsPanelComponent {

}
