import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'DrinkIsland';
  backgroundImageUrl: string = '/assets/img/iw.jpg';

  constructor() { }

  ngOnInit(): void {
  }
}
