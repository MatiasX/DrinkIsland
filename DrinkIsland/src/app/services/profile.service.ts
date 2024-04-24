import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient , private router: Router) { }

  getProfileData(): Observable<any[]> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.get<any[]>(this.baseUrl + 'getUserProfileData', { headers });
  }
  setNewPassword(newPassword: any) {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    this.http.put<any>(this.baseUrl + 'setNewPassword', newPassword, { headers }).subscribe(
      response => {
        console.log('Password changed successfully: response:  ', response);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Failed to change assword:', error);
      }
    );
  }
  deleteAccount(): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    this.router.navigate(['/loginsignup']);
    return this.http.delete<any>(this.baseUrl + 'deleteAccount', { headers });
  }
}
