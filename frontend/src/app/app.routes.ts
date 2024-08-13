import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { BlogHomeComponent } from './screens/blog-home/blog-home.component';
import { BlogPostComponent } from './screens/blog-post/blog-post.component';
import { BlogProfileComponent } from './screens/blog-profile/blog-profile.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogHomeComponent },
  { path: 'blog/post/:id', component: BlogPostComponent },
  { path: 'blog/user/:id', component: BlogProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/technologies', component: DashboardComponent },
  { path: 'dashboard/projects', component: DashboardComponent },
  { path: 'dashboard/posts', component: DashboardComponent },
  { path: 'dashboard/users', component: DashboardComponent },
];
