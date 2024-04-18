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
}
