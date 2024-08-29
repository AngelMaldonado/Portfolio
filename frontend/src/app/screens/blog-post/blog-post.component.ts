import { Component } from '@angular/core';
import { BadgeComponent } from '../../components/atoms/badge/badge.component';
import { StarsRatingComponent } from '../../components/atoms/stars-rating/stars-rating.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import Post from '../../models/Post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [BadgeComponent, StarsRatingComponent, RouterLink, DatePipe],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  post: Post = new Post("", "", "", "", "")

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private postService: PostsService) {
    postService.getPost(this.activatedRoute.snapshot.params['id'])
      .subscribe(post => this.post = post)
  }

  goBack() {
    this.location.back();
  }
}
