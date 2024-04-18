import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItalokService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getAllItalok(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'getItalok');
  }

  addItal(ital: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.post<any>(this.baseUrl + 'addItal', ital, { headers });
  }

  updateItal(ital: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.put<any>(this.baseUrl + 'modifyItal', ital, { headers });
  }

  deleteItal(ital: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }),
      body: ital,
    };
    return this.http.delete<any>(this.baseUrl + 'deleteItal', options);
  }
}