import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
backgroundImageUrl: string = '/assets/img/iw.jpg';
items: any;
toggleAccordion(_t4: any) {
throw new Error('Method not implemented.');
}
  ingredients: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/Coctails_Database.json').subscribe(data => {
      this.ingredients = data.ingredients;
    });
  }
}
