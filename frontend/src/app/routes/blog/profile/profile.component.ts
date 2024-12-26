import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { LinkComponent } from '@shared/components/ui';
import { BlogPostCardComponent } from '@shared/components/templates/blog-post-card/blog-post-card.component';
import User from '@models/User';
import { AuthService } from '@services/auth.service';

@Component({
    selector: 'app-blog-profile',
    imports: [SvgIconComponent, LinkComponent, BlogPostCardComponent],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user?: User;

  constructor(private authService: AuthService) {
    this.user = this.authService.getUser();
  }
}
