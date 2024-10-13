import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { authGuard } from "../../core/guards/auth.guard";

export const AdminRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'technologies', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'projects', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'posts', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'users', component: DashboardComponent, canActivate: [authGuard] },
]
