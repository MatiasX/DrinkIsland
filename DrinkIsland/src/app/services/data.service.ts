import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) {}
  private baseUrl = 'http://localhost:8000/api/';

  getData(){
    return this.httpClient.get(this.baseUrl + 'getKoktelok');
  }

  searchKoktel(name: any){
    return this.httpClient.get(this.baseUrl + 'searchKoktelokByName?name='+name.name);
  }

  getAlcoholicData(){
    return this.httpClient.get(this.baseUrl + 'getAlkoholos');
  }

  getNonAlcoholicData(){
    return this.httpClient.get(this.baseUrl + 'getAlkoholmentes');
  }
}
