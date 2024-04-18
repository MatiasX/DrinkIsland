import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detailed-search',
  templateUrl: './detailed-search.component.html',
  styleUrls: ['./detailed-search.component.css']
})
export class DetailedSearchComponent implements OnInit {

  drinks: any;

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.getDrinksData();
  }

  getDrinksData() {
    this.dataService.getData().subscribe(res => {
      this.drinks = res;
    })
  }

}
