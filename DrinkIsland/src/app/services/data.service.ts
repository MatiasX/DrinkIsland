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

  getTeliData(){
    return this.httpClient.get(this.baseUrl + 'getTeli');
  }
  
  getNyariData(){
    return this.httpClient.get(this.baseUrl + 'getNyari');
  }
  
  getEdesData(){
    return this.httpClient.get(this.baseUrl + 'getEdes');
  }
  
  getSavanyuData(){
    return this.httpClient.get(this.baseUrl + 'getSavanyu');
  }
  
  getKeseruData(){
    return this.httpClient.get(this.baseUrl + 'getKeseru');
  }
  
}
