import { Component } from '@angular/core';
import { LinkComponent } from '../../components/atoms/link/link.component';
import { BadgeComponent } from '../../components/atoms/badge/badge.component';
import { BlogPostCardComponent } from '../../components/templates/blog-post-card/blog-post-card.component';

@Component({
  selector: 'app-blog-home',
  standalone: true,
  imports: [LinkComponent, BadgeComponent, BlogPostCardComponent],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.css'
})
export class BlogHomeComponent {

}
