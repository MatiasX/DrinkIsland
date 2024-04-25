import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  drinks: { alcoholAmount: number, alcoholPercentage: number }[] = [{ alcoholAmount: 0, alcoholPercentage: 0 }];
  weight: number = 70;
  gender: string = 'male';
  timeSinceLastDrink: number = 0;
  soberingTime: number = 0;
  bloodAlcoholContent: number = 0;

  addNumberPair() {
    // Check if the existing pairs are valid before adding a new one
    const isValid = this.drinks.every(pair => pair.alcoholAmount >= 0 && pair.alcoholPercentage >= 0);
    if (isValid) {
      this.drinks.push({ alcoholAmount: 0, alcoholPercentage: 0 });
    } else {
      alert('Csak nemnegatív számokat adhat meg.');
    }
  }

  removeNumberPair(index: number) {
    this.drinks.splice(index, 1);
  }

  onSubmit() {
    const isValid = this.drinks.every(pair => pair.alcoholAmount >= 0 && pair.alcoholPercentage >= 0);
    if (!isValid) {
      alert('Please enter non-negative numbers for all pairs.');
      return; // Prevent submission if any pair is invalid
    }else{
    this.calculate();
    }
  }


  constructor(private calculatorService: CalculatorService) { }

  calculate() {
    this.soberingTime = this.calculatorService.calculateTimeToSober(
      this.weight,
      this.gender,
      this.drinks,
      this.timeSinceLastDrink
    );
    this.bloodAlcoholContent = this.calculatorService.calculateBAC(
      this.weight,
      this.gender,
      this.drinks,
      this.timeSinceLastDrink
    );
  }
}
