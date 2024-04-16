import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlapanyagokService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getAllAlapanyagok(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addAlapanyag(alapanyagData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, alapanyagData);
  }

  updateAlapanyag(id: number, alapanyagData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, alapanyagData);
  }

  deleteAlapanyag(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
