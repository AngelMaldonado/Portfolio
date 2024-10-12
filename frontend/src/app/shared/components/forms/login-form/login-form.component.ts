import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import User from '@models/User';
import { AuthService } from '@services/auth.service';
import { LinkComponent } from "../../ui/link/link.component";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [LinkComponent, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  user!: User
  error?: string

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User("", "", "", "", "", [], new Date())
  }

  onSubmit(e: any) {
    e.preventDefault()
    this.authService.login(this.user)
      .subscribe({
        next: response => {
          this.error = undefined
          // store token in local storage and redirect to blog page
          localStorage.setItem('user', JSON.stringify(new User(
            this.user.email,
            "",
            (response as { token: string }).token,
            undefined,
            undefined,
            undefined, undefined,
            (response as { _id: string })._id
          )))
          this.router.navigate(['/blog']).then(_ => window.location.reload())
        },
        error: response => {
          this.error = response.error.message
          setTimeout(() => this.error = undefined, 5000)
        }
      })
  }
}
