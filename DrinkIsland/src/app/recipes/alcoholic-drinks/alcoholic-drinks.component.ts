import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alcoholic-drinks',
  templateUrl: './alcoholic-drinks.component.html',
  styleUrls: ['./alcoholic-drinks.component.css']
})
export class AlcoholicDrinksComponent {
  ingredients: any[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<any>('assets/Coctails_Database.json').subscribe(data => {
      this.ingredients = data.ingredients;
    });
  }
  getJsonData(): Observable<any> {
    //return this.http.get<any>('DrinkIsland_main/Coctails_Database.json');
    return this.http.get<any>("assets/Coctails_Database.json");
  }
}
