import { Component, Input, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Comment, Post, User } from "@models/index";
import { AuthService } from "@services/auth.service";
import { CommentsService } from "@services/comments.service";
import { StarsRatingComponent } from "@shared/components/ui";

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [StarsRatingComponent, FormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentFormComponent implements OnInit {
  @Input({ required: true }) post!: Post
  comment!: Comment

  constructor(private commentService: CommentsService, private authService: AuthService) { }

  ngOnInit(): void {
    const user = this.authService.getUser()
    if (user)
      this.comment = new Comment(0, "", this.post, user)
  }

  onStarsChange(stars: number) {
    this.comment.stars = stars
  }

  onSubmit() {
    this.commentService.addComment(this.comment)
    this.comment = new Comment(0, "", this.post, this.comment.user)
  }
}
