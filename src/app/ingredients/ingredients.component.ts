import { Component } from '@angular/core';
import { JsonLoaderService } from './json-loader.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  jsonData: any;

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    this.loadJsonData();
  }

  loadJsonData() {
    this.jsonLoaderService.getJsonData().subscribe(
      (data) => {
        this.jsonData = data;
        console.log(this.jsonData);
      },
      (error) => {
        console.error('Error loading JSON data', error);
      }
    );
  }
}
