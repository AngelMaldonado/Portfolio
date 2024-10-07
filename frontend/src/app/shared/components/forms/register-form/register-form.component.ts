import { Component } from '@angular/core';
import { LinkComponent } from "../../ui/link/link.component";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  onSubmit(e: Event) {
    e.preventDefault();
    console.log('Form submitted');
  }
}
