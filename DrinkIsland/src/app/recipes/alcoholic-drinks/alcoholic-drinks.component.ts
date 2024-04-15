import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-alcoholic-drinks',
  templateUrl: './alcoholic-drinks.component.html',
  styleUrls: ['./alcoholic-drinks.component.css']
})
export class AlcoholicDrinksComponent implements OnInit {
  drinks:any;
  

  constructor(private dataService:DataService) { }
  ngOnInit(): void {
    this.getDrinksData();
  }

  getDrinksData(){
    this.dataService.getData().subscribe(res =>{
      this.drinks = res;
    })
  }

  insertData(){
    console.log("ahoi");
  }
}
