import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  calculateTimeToSober(weight: number, gender: string, alcoholAmount: number, drinkAlcoholPercentage: number, timeSinceLastDrink: number): number {
    const soberingRate = gender === 'male' ? 0.015 : 0.017;
    const gramsOfAlcohol = alcoholAmount * drinkAlcoholPercentage * 10; // Átváltás dl-ből grammra (1 dl = 10 g alkohol)
    const bloodAlcoholContent = gramsOfAlcohol / (weight * soberingRate);
    const soberingTime = bloodAlcoholContent * 0.015;

    return soberingTime;
  }
}
