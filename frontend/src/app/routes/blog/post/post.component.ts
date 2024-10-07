import { DatePipe, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BadgeComponent, StarsRatingComponent } from '@components/ui';
import { Comment, Post } from '@models/index';
import { PostsService } from '@services/index';
import { CommentFormComponent } from '@shared/components/forms/comment-form/comment-form.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [BadgeComponent, StarsRatingComponent, RouterLink, DatePipe, CommentFormComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  post!: Post
  comments!: Comment[]

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private postService: PostsService) {
    this.postService.getPost(this.activatedRoute.snapshot.params['id'])
      .subscribe(post => this.post = post)
    this.postService.getComments(this.activatedRoute.snapshot.params['id'])
      .subscribe(comments => {
        this.comments = comments
      })
  }

  goBack() {
    this.location.back();
  }
}
