import { Component, OnInit } from '@angular/core';
import { AlapanyagokService } from '../../services/alapanyagok.service';

@Component({
  selector: 'app-alapanyag',
  templateUrl: './alapanyag.component.html',
  styleUrls: ['./alapanyag.component.css']
})
export class AlapanyagokComponent implements OnInit {
  alapanyagok: any[]=[];

  constructor(private alapanyagokService: AlapanyagokService) { }

  ngOnInit(): void {
    this.loadAlapanyagok();
  }

  loadAlapanyagok(): void {
    this.alapanyagokService.getAllAlapanyagok().subscribe(
      data => {
        this.alapanyagok = data;
      },
      error => {
        console.error('Error loading alapanyagok:', error);
      }
    );
  }
}
