import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-type-search',
  templateUrl: './type-search.component.html',
  styleUrls: ['./type-search.component.css']
})
export class TypeSearchComponent {
  searchFunctions = ['Összes', 'Téli', 'Nyári', 'Édes', 'Savanyú', 'Keserű'];
  selected: string= 'Összes';
  drinks: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(res => {
      this.drinks = res;
    });
  }

  search(): void {
    // Call the corresponding search function from the service based on the selected option
    switch (this.selected) {
      case 'Összes':
        this.dataService.getData().subscribe(res => {
          this.drinks = res;
        });
        break;
      case 'Téli':
        this.dataService.getTeliData().subscribe(res => {
          this.drinks = res;
        });
        break;
      case 'Nyári':
        this.dataService.getNyariData().subscribe(res => {
          this.drinks = res;
        });
        break;
      case 'Édes':
        this.dataService.getEdesData().subscribe(res => {
          this.drinks = res;
        });
        break;
      case 'Savanyú':
        this.dataService.getSavanyuData().subscribe(res => {
          this.drinks = res;
        });
        break;
      case 'Keserű':
        this.dataService.getKeseruData().subscribe(res => {
          this.drinks = res;
        });
        break;
    }
  }
}
