import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-justsignup',
  templateUrl: './justsignup.component.html',
  styleUrls: ['./justsignup.component.css']
})
export class JustsignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';

  constructor(private http: HttpClient, private router:Router) { }

  register(): void {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
      password_confirmation: this.passwordConfirmation
    };

    this.http.post<any>('http://127.0.0.1:8000/api/register', userData).subscribe(
      response => {
        console.log('User registered successfully:', response);
        this.router.navigate(['/loginsignup']);
        // Optionally, you can redirect the user or perform other actions after successful registration
      },
      error => {
        console.error('Failed to register user:', error);
        // Optionally, you can display an error message to the user
      }
    );
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

togglePasswordVisibility1(): void {
    const passwordConfirmationField: HTMLInputElement | null = document.getElementById('password_confirmation') as HTMLInputElement;
    const passwordToggle: HTMLElement | null = document.getElementById('password-toggle1');

    if (passwordConfirmationField && passwordToggle) {
        if (passwordConfirmationField.type === 'password') {
            passwordConfirmationField.type = 'text';
            passwordToggle.classList.remove('fa-eye');
            passwordToggle.classList.add('fa-eye-slash');
        } else {
            passwordConfirmationField.type = 'password';
            passwordToggle.classList.remove('fa-eye-slash');
            passwordToggle.classList.add('fa-eye');
        }
    }
}

}
