import { Component, OnInit } from '@angular/core';
import { AlapanyagokService } from '../../services/alapanyagok.service';

@Component({
  selector: 'app-alapanyag',
  templateUrl: './alapanyag.component.html',
  styleUrls: ['./alapanyag.component.css']
})
export class AlapanyagokComponent implements OnInit {
  alapanyagok: any[] = [];
  newAlapanyag: any = { name: '' };

  constructor(private alapanyagokService: AlapanyagokService) { }

  ngOnInit(): void {
    this.loadAlapanyagok();
  }

  loadAlapanyagok(): void {
    this.alapanyagokService.getAllAlapanyagok().subscribe(
      response => {
        this.alapanyagok = response;
      },
      error => {
        console.error('Error loading data:', error);
      }
    );
  }

  addAlapanyag(newAlapanyag: any): void {
    this.alapanyagokService.addAlapanyag(newAlapanyag).subscribe(
      response => {
        console.log('Data updated successfully:', response);
        this.loadAlapanyagok();
        // Optionally, reload the data after update
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }

  updateAlapanyag(alapanyag: any): void {
    this.alapanyagokService.updateAlapanyag(alapanyag).subscribe(
      response => {
        console.log('Data updated successfully:', response);
        this.loadAlapanyagok();
        // Optionally, reload the data after update
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }

  deleteAlapanyag(alapanyag: any): void {
    this.alapanyagokService.deleteAlapanyag(alapanyag).subscribe(
      response => {
        console.log('Data deleted successfully:', response);
        this.loadAlapanyagok();
        // Optionally, reload the data after update
      },
      error => {
        console.error('Error deleting data:', error);
      }
    );
  }
}
