import { Component } from '@angular/core';
import { LinkComponent } from "../../components/link/link.component";
import { DashboardTechCardComponent } from '../../components/dashboard-tech-card/dashboard-tech-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LinkComponent, DashboardTechCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
