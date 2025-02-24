import { Component } from '@angular/core';
import User from '@models/User';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-blog-profile',
  imports: [SvgIconComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user?: User;

  constructor(private authService: AuthService) {
    this.user = this.authService.getUser();
  }
}
