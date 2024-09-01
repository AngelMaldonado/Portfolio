import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { LinkComponent } from '@shared/components/ui';
import { BlogPostCardComponent } from '@shared/components/templates/blog-post-card/blog-post-card.component';

@Component({
  selector: 'app-blog-profile',
  standalone: true,
  imports: [SvgIconComponent, LinkComponent, BlogPostCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
}
