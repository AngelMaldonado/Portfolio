import { Component, Input } from '@angular/core';
import { LinkComponent } from '../../atoms/link/link.component';
import Post from '../../../models/Post';
import { DatePipe } from '@angular/common';

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
