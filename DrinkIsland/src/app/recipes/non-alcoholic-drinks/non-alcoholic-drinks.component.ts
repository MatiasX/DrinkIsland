import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-non-alcoholic-drinks',
  templateUrl: './non-alcoholic-drinks.component.html',
  styleUrls: ['./non-alcoholic-drinks.component.css']
})
export class NonAlcoholicDrinksComponent implements OnInit {
  drinks: any;
  koktel: any={name:''};

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.getNonAlcoholicDrinksData();
  }

  getNonAlcoholicDrinksData() {
    this.dataService.getNonAlcoholicData().subscribe(res => {
      this.drinks = res;
    })
  }
}
