import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import Post from '@models/Post';
import { LinkComponent } from '@shared/components/ui';

@Component({
  selector: 'app-blog-post-card',
  standalone: true,
  imports: [LinkComponent, DatePipe],
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.css'
})
export class BlogPostCardComponent {
  @Input({ required: true }) post!: Post
}
