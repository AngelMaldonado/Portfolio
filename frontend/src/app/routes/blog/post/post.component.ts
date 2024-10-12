import { DatePipe, Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { BadgeComponent, StarsRatingComponent } from '@components/ui';
import { Comment, Post } from '@models/index';
import { AuthService } from '@services/auth.service';
import { PostsService, CommentsService } from '@services/index';
import { CommentFormComponent } from '@shared/components/forms/comment-form/comment-form.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [BadgeComponent, StarsRatingComponent, RouterLink, DatePipe, CommentFormComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnDestroy {
  post!: Post;
  comments: Comment[] = [];
  canComment = false;
  private commentChangeSub!: Subscription; // Subscription to handle comment changes

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private postService: PostsService,
    private authService: AuthService,
    private commentService: CommentsService // Inject comment service
  ) {
    this.authService.validateSession().subscribe({
      next: _ => this.canComment = true,
      error: _ => this.canComment = false
    });

    this.postService.getPost(this.activatedRoute.snapshot.params['id'])
      .subscribe(post => this.post = post);

    this.postService.getComments(this.activatedRoute.snapshot.params['id'])
      .subscribe(comments => this.comments = comments);

    // Subscribe to the comment change observable
    this.commentChangeSub = this.commentService.someChange.subscribe((newComment: Comment) => {
      this.comments.push(newComment); // Update comments array when a new comment is added
    });
  }

  // Unsubscribe from comment changes when the component is destroyed
  ngOnDestroy(): void {
    if (this.commentChangeSub) {
      this.commentChangeSub.unsubscribe();
    }
  }

  goBack() {
    this.location.back();
  }
}
