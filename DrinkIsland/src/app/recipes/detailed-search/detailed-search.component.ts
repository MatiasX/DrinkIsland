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
  koktel: any={name:''};

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.getDrinksData();
  }

  searchKoktel(koktel: any){
    this.dataService.searchKoktel(koktel).subscribe(
      res => {
        this.drinks= res;
        console.log(koktel);
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }

  getDrinksData() {
    this.dataService.getData().subscribe(res => {
      this.drinks = res;
      console.log(res);
    })
  }

}
