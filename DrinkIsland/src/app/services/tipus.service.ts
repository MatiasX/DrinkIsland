import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipusService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getAllTipusok(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'getTipusok');
  }

  addTipus(tipus: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    console.log(headers);
    return this.http.post<any>(this.baseUrl + 'addTipus', tipus, { headers });
  }

  updateTipus(tipus: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.put<any>(this.baseUrl + 'modifyTipus', tipus, { headers });
  }

  deleteTipus(tipus: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }),
      body: tipus,
    };
    return this.http.delete<any>(this.baseUrl + 'deleteTipus', options);
  }
}
