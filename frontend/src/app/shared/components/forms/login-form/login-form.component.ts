import { Component, OnInit } from '@angular/core';
import { LinkComponent } from "../../ui/link/link.component";
import User from '@models/User';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [LinkComponent, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  user!: User

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = new User("", "", "", "", [], new Date())
  }

  onSubmit(e: any) {
    e.preventDefault()
    this.authService.login(this.user)
      .subscribe({
        next: response => console.log('User logged in ', response),
        error: error => console.log('Error logging in ', error)
      })
  }
}
