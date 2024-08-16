import { Component } from '@angular/core';
import { DashboardPostCardComponent } from "../../templates/dashboard-post-card/dashboard-post-card.component";

@Component({
  selector: 'app-dashboard-posts-panel',
  standalone: true,
  imports: [DashboardPostCardComponent],
  templateUrl: './dashboard-posts-panel.component.html',
  styleUrl: './dashboard-posts-panel.component.css'
})
export class DashboardPostsPanelComponent {

}
