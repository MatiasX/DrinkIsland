import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent {
  username: string = '';
  password: string = '';
  
  constructor(private http: HttpClient) { }

  login(): void {
    const userData = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://127.0.0.1:8000/api/login', userData).subscribe(
      response => {
        console.log('User logged in successfully:', response);
        localStorage.setItem('authToken', response.success.token);
        localStorage.setItem('isLoggedIn', 'true');
        // localStorage.setItem('userData', this.userData);
      },
      error => {
        console.error('Failed to log in user:', error);
        // Optionally, you can display an error message to the user
      }
    );
  }
}
