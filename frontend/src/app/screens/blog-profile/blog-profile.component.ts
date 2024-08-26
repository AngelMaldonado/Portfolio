import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { LinkComponent } from '../../components/atoms/link/link.component';
import { BlogPostCardComponent } from '../../components/templates/blog-post-card/blog-post-card.component';

@Component({
  selector: 'app-blog-profile',
  standalone: true,
  imports: [SvgIconComponent, LinkComponent, BlogPostCardComponent],
  templateUrl: './blog-profile.component.html',
  styleUrl: './blog-profile.component.css'
})
export class BlogProfileComponent {
}
