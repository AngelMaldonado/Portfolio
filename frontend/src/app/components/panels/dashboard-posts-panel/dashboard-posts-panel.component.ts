import { Component } from '@angular/core';
import { DashboardPostCardComponent } from "../../templates/dashboard-post-card/dashboard-post-card.component";
import { PostsService } from '../../../services/posts.service';
import Post from '../../../models/Post';

@Component({
  selector: 'app-dashboard-posts-panel',
  standalone: true,
  imports: [DashboardPostCardComponent],
  templateUrl: './dashboard-posts-panel.component.html',
  styleUrl: './dashboard-posts-panel.component.css'
})
export class DashboardPostsPanelComponent {
  posts: Post[]
  constructor(private projectsService: PostsService) {
    this.posts = []
    this.getPosts()
  }

  ngOnInit() {
    this.projectsService.someChange.subscribe(_ => this.getPosts())
  }

  getPosts(): void {
    this.projectsService.getPosts().subscribe(projects => {
      this.posts = projects
    })
  }
}
