import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  backgroundImageUrl: string = '/assets/img/iw.jpg';

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
