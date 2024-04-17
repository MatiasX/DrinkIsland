import { Component } from '@angular/core';
import { TipusService } from '../../services/tipus.service';

@Component({
  selector: 'app-tipus',
  templateUrl: './tipus.component.html',
  styleUrls: ['./tipus.component.css']
})
export class TipusComponent {
  tipusok: any[] = [];
  newTipus: any = { name: '' };

  constructor(private tipusokService: TipusService) { }

  ngOnInit(): void {
    this.loadTipusok();
  }

  loadTipusok(): void {
    this.tipusokService.getAllTipusok().subscribe(
      response => {
        this.tipusok = response;
      },
      error => {
        console.error('Error loading data:', error);
      }
    );
  }

  addTipus(newTipus: any): void {
    this.tipusokService.addTipus(newTipus).subscribe(
      response => {
        console.log('Data updated successfully:', response);
        this.loadTipusok();
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }

  updateTipus(tipus: any): void {
    this.tipusokService.updateTipus(tipus).subscribe(
      response => {
        console.log('Data updated successfully:', response);
        this.loadTipusok();
      },
      error => {
        console.error('Error updating data:', error);
      }
    );
  }

  deleteTipus(tipus: any): void {
    this.tipusokService.deleteTipus(tipus).subscribe(
      response => {
        console.log('Data deleted successfully:', response);
        this.loadTipusok();
      },
      error => {
        console.error('Error deleting data:', error);
      }
    );
  }
}
