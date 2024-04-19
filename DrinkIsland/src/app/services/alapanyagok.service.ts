import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlapanyagokService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getAllAlapanyagok(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'getAlapanyagok');
  }

  addAlapanyag(alapanyag: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.post<any>(this.baseUrl + 'addAlapanyag', alapanyag, { headers });
  }

  updateAlapanyag(alapanyag: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.put<any>(this.baseUrl + 'modifyAlapanyag', alapanyag, { headers });
  }

  deleteAlapanyag(alapanyag: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }),
      body: alapanyag,
    };
    return this.http.delete<any>(this.baseUrl + 'deleteAlapanyag', options);
  }
}
