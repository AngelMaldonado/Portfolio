import { Component } from '@angular/core';
import { LoginFormComponent } from "../../../shared/components/forms/login-form/login-form.component";

@Component({
    selector: 'app-login',
    imports: [LoginFormComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

}
