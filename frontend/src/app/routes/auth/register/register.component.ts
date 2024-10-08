import { Component } from '@angular/core';
import { RegisterFormComponent } from "../../../shared/components/forms/register-form/register-form.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}