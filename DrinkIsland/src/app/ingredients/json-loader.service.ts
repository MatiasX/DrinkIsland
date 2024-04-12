import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonLoaderService {
  constructor(private http: HttpClient) {}

  getJsonData(): Observable<any> {
    //return this.http.get<any>('DrinkIsland_main/Coctails_Database.json');
    return this.http.get<any>("assets/Coctails_Database.json");
  }
}


