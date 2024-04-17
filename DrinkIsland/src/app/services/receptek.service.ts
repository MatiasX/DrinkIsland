import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptekService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getAllReceptek(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'getReceptek');
  }

  addRecept(recept: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    console.log(headers);
    return this.http.post<any>(this.baseUrl + 'addRecept', recept, { headers });
  }

  updateRecept(recept: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.put<any>(this.baseUrl + 'modifyRecept', recept, { headers });
  }

  deleteRecept(recept: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }),
      body: recept,
    };
    return this.http.delete<any>(this.baseUrl + 'deleteRecept', options);
  }
}
