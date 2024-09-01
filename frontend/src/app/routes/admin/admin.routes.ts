import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const AdminRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'technologies', component: DashboardComponent },
  { path: 'projects', component: DashboardComponent },
  { path: 'posts', component: DashboardComponent },
  { path: 'users', component: DashboardComponent },
]
