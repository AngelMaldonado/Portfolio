import { DatePipe, Location } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { BadgeComponent, StarsRatingComponent } from '@components/ui';
import { Comment, Post } from '@models/index';
import { AuthService } from '@services/auth.service';
import { PostsService, CommentsService } from '@services/index';
import { CommentFormComponent } from '@shared/components/forms/comment-form/comment-form.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // For sanitizing HTML
import { marked } from 'marked'; // Import the marked library

@Component({
    selector: 'app-blog-post',
    imports: [BadgeComponent, StarsRatingComponent, RouterLink, DatePipe, CommentFormComponent],
    templateUrl: './post.component.html',
    styleUrl: './post.component.css'
})
export class PostComponent implements OnDestroy {
  post!: Post;
  comments: Comment[] = [];
  canComment = false;
  markdownContent: SafeHtml = ''; // Safe HTML content for the markdown
  private commentChangeSub!: Subscription; // Subscription to handle comment changes

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private postService: PostsService,
    private authService: AuthService,
    private commentService: CommentsService, // Inject comment service
    private sanitizer: DomSanitizer // For sanitizing the rendered HTML
  ) {
    this.authService.validateSession().subscribe({
      next: _ => this.canComment = true,
      error: _ => this.canComment = false
    });

    // Fetch the post details
    this.postService.getPost(this.activatedRoute.snapshot.params['id'])
      .subscribe(post => {
        this.post = post;
        this.fetchAndRenderMarkdown(post.markdownUrl); // Fetch and render markdown content
      });

    // Fetch the comments
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

  // Fetch the markdown content and render it as safe HTML
  private fetchAndRenderMarkdown(markdownUrl: string): void {
    this.postService.fetchMarkdown(markdownUrl).subscribe({
      next: markdown => {
        const html = marked(markdown) as string; // Convert markdown to HTML
        console.log(html)
        this.markdownContent = this.sanitizer.bypassSecurityTrustHtml(html); // Sanitize the HTML
      },
      error: err => {
        console.error('Failed to fetch markdown content', err);
      }
    });
  }
}
