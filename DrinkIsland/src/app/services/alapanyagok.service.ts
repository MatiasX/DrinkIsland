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
    return this.http.get<any[]>('http://localhost:8000/api/getAlapanyagok');
  }

  addAlapanyag(alapanyag: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'addAlapanyag', alapanyag);
  }

  updateAlapanyag(alapanyag: any): Observable<any> {
    return this.http.put<any>(this.baseUrl+'modifyAlapanyag', alapanyag);
  }

  deleteAlapanyag(alapanyag: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: alapanyag,
    };
    return this.http.delete<any>(this.baseUrl+'deleteAlapanyag', options);
  }
}
