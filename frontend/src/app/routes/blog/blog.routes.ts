import { Routes } from "@angular/router";
import { HomeComponent } from "./posts/posts.component";
import { PostComponent } from "./post/post.component";
import { ProfileComponent } from "./profile/profile.component";

export const BlogRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'user/:id', component: ProfileComponent }
]
