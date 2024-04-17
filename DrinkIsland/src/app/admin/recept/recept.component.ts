import { Component } from '@angular/core';
import { ReceptekService } from 'src/app/services/receptek.service';

@Component({
  selector: 'app-recept',
  templateUrl: './recept.component.html',
  styleUrls: ['./recept.component.css']
})
export class ReceptComponent {
  receptek: any[] = [];
  newRecept: any = { ital_id: '' , alapanyag_id: '' , amount: ''};

  constructor(private receptekService: ReceptekService) { }

  ngOnInit(): void {
    this.loadReceptek();
  }

  loadReceptek(): void {
    this.receptekService.getAllReceptek().subscribe(
      response => {
        this.receptek = response;
      },
      error => {
        console.error('Error loading data:', error);
      }
    );
  }

  addRecept(newRecept: any): void {
    this.receptekService.addRecept(newRecept).subscribe(
      response => {
        console.log('Data updated successfully:', response);
        // Optionally, reload the data after update
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }

  updateRecept(recept: any): void {
    this.receptekService.updateRecept(recept).subscribe(
      response => {
        console.log('Data updated successfully:', response);
        // Optionally, reload the data after update
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }

  deleteRecept(recept: any): void {
    this.receptekService.deleteRecept(recept).subscribe(
      response => {
        console.log('Data deleted successfully:', response);
        // Optionally, reload the data after update
      },
      error => {
        console.error('Error deleting data:', error);
      }
    );
  }
}
