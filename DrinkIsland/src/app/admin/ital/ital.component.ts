import { Component, OnInit } from '@angular/core';
import { ItalokService } from 'src/app/services/italok.service';

@Component({
  selector: 'app-ital',
  templateUrl: './ital.component.html',
  styleUrls: ['./ital.component.css']
})
export class ItalComponent {
  italok: any[] = [];
  newItal: any = { name: '' };

  constructor(private italokService: ItalokService) { }

  ngOnInit(): void {
    this.loadItalok();
  }

  loadItalok(): void {
    this.italokService.getAllItalok().subscribe(
      response => {
        this.italok = response;
      },
      error => {
        console.error('Error loading data:', error);
      }
    );
  }

  addItal(newItal: any): void {
    this.italokService.addItal(newItal).subscribe(
      response => {
        console.log('Data updated successfully:', response);
        this.loadItalok();
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }

  updateItal(ital: any): void {
    this.italokService.updateItal(ital).subscribe(
      response => {
        console.log('Data updated successfully:', response);
        this.loadItalok();
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }

  deleteItal(ital: any): void {
    this.italokService.deleteItal(ital).subscribe(
      response => {
        console.log('Data deleted successfully:', response);
        this.loadItalok();
      },
      error => {
        console.error('Error deleting data:', error);
      }
    );
  }
}
