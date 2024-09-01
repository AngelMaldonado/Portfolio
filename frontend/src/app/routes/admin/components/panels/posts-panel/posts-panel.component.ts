import { PostCardComponent } from '@admincomponents/templates/post-card';
import { Component } from '@angular/core';
import Post from '@models/Post';
import { PostsService } from '@services/posts.service';

@Component({
  selector: 'app-dashboard-posts-panel',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './posts-panel.component.html',
  styleUrl: './posts-panel.component.css'
})
export class PostsPanelComponent {
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
