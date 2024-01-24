import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  weight: number = 0;
  gender: string = '';
  alcoholAmount: number = 0;
  drinkAlcoholPercentage: number = 0;
  timeSinceLastDrink: number = 0;
  result: number = 0;

  constructor(private calculatorService: CalculatorService) {}

  calculate() {
    this.result = this.calculatorService.calculateTimeToSober(
      this.weight,
      this.gender,
      this.alcoholAmount,
      this.drinkAlcoholPercentage,
      this.timeSinceLastDrink
    );
  }
}
