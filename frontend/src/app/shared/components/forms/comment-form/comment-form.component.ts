import { Component, Input, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Comment, Post, User } from "@models/index";
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

  constructor(private commentService: CommentsService) { }

  ngOnInit(): void {
    this.comment = new Comment(0, "", this.post, new User("amald@gmail.com", "Angel", undefined, undefined, undefined, "66d0f9a757764243f08a785a"))
  }

  onStarsChange(stars: number) {
    this.comment.stars = stars
  }

  onSubmit() {
    this.commentService.addComment(this.comment)
  }
}
