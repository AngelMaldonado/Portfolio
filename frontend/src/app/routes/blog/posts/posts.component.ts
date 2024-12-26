import { Component } from '@angular/core';
import Post from '@models/Post';
import { PostsService } from '@services/posts.service';
import { BlogPostCardComponent } from '@shared/components/templates/blog-post-card/blog-post-card.component';
import { BadgeComponent, LinkComponent } from '@shared/components/ui';

@Component({
    selector: 'app-blog-home',
    imports: [LinkComponent, BadgeComponent, BlogPostCardComponent],
    templateUrl: './posts.component.html',
    styleUrl: './posts.component.css'
})
export class HomeComponent {
  posts: Post[] = []
  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(posts => this.posts = posts)
  }
}
