import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./routes/home/home.routes').then(m => m.HomeRoutes)
  },
  {
    path: 'blog',
    loadChildren: () => import('./routes/blog/blog.routes').then(m => m.BlogRoutes)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./routes/admin/admin.routes').then(m => m.AdminRoutes),
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./routes/auth/auth.routes').then(m => m.AuthRoutes)
  },
];
