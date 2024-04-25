import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent {
  username: string = '';
  password: string = '';

  constructor(private signIn:LoginService) { }

  login(): void {
    const userData = {
      username: this.username,
      password: this.password
    };
    this.signIn.signIn(userData);

  }

  togglePasswordVisibility(): void {
    const passwordField: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;
    const passwordToggle: HTMLElement | null = document.getElementById('password-toggle');

    if (passwordField && passwordToggle) {
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordToggle.classList.remove('fa-eye');
        passwordToggle.classList.add('fa-eye-slash');
      } else {
        passwordField.type = 'password';
        passwordToggle.classList.remove('fa-eye-slash');
        passwordToggle.classList.add('fa-eye');
      }
    }
  }
}

