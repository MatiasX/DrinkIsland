import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userLogInsub = new BehaviorSubject<any>(false);
  public userIsAdmin = new BehaviorSubject<any>(false);
  constructor(private http: HttpClient, private router: Router) { }

  signIn(body: any) {
    this.http.post<any>('http://127.0.0.1:8000/api/login', body).subscribe(
      response => {
        console.log('User logged in successfully: response:  ', response);
        localStorage.setItem('authToken', response.success.token);
        localStorage.setItem('isLoggedIn', 'true');
        this.userLogInsub.next(true);
        this.isAdmin();


        this.router.navigate(['/']);
        // localStorage.setItem('userData', this.userData);
      },
      error => {
        console.error('Failed to log in user:', error);
        this.userLogInsub.next(false);
      }
    );
  }

  isAdmin() {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    this.http.get<any>('http://127.0.0.1:8000/api/getUserProfileData', { headers }).subscribe(
      response => {
        localStorage.setItem('user_id', response.username.id);
        if (response.username.is_admin == 1) { this.userIsAdmin.next(true); }
      },
      error => {
        console.error(error);
      }
    )
  }

  logout(): void {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    this.http.post<any>('http://127.0.0.1:8000/api/logout', {}, { headers: headers }).subscribe({
      next: (response) => {
        console.log("kiléptem")
        localStorage.removeItem('authToken');
        localStorage.removeItem('isLoggedIn');
        this.userLogInsub.next(false);
        this.userIsAdmin.next(false);
        this.router.navigate(['/loginsignup']);

      },
      error: error => {
        console.error('Failed to logout in user:', error);
        // Optionally, you can display an error message to the user
      }
    })
  }
}
