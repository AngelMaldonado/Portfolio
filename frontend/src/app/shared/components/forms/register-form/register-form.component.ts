import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { LinkComponent } from '@shared/components/ui';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LinkComponent], // Add ReactiveFormsModule here
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pswd: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { email, pswd } = this.registerForm.value;

      this.authService.register({ email, pswd }).subscribe({
        next: (response) => {
          // Handle successful registration, e.g., save the token and navigate
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          // Handle error (e.g., show a message)
          console.error('Registration failed:', error);
        },
      });
    }
  }
}
