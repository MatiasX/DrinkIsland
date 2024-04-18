import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-alcoholic-drinks',
  templateUrl: './alcoholic-drinks.component.html',
  styleUrls: ['./alcoholic-drinks.component.css']
})
export class AlcoholicDrinksComponent implements OnInit {
  drinks: any;
  koktel: any={name:''};

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.getAlcoholicDrinksData();
  }

  getAlcoholicDrinksData() {
    this.dataService.getAlcoholicData().subscribe(res => {
      this.drinks = res;
      console.log(res);
    })
  }
}
