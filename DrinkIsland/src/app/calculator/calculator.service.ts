import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  calculateTimeToSober(weight: number, gender: string, alcoholAmount: number, drinkAlcoholPercentage: number, timeSinceLastDrink: number): number {
    const soberingRate = gender === 'male' ? 0.148  : 0.156;
    const distribution = gender === 'male' ? 0.71  : 0.58;
    const gramsOfAlcohol = alcoholAmount * drinkAlcoholPercentage * 1.055; // Átváltás ml-ből grammra (1 ml = 1.055 g alkohol)
    const volumeOfDistribution = weight * distribution;
    const bloodAlcoholContent = gramsOfAlcohol / volumeOfDistribution - soberingRate * timeSinceLastDrink;
    const soberingTime = bloodAlcoholContent/soberingRate;

    return soberingTime;
  }
  calculateBAC(weight: number, gender: string, alcoholAmount: number, drinkAlcoholPercentage: number, timeSinceLastDrink: number): number {
    const soberingRate = gender === 'male' ? 0.148  : 0.156;
    const distribution = gender === 'male' ? 0.71  : 0.58;
    const gramsOfAlcohol = alcoholAmount * drinkAlcoholPercentage * 1.055; // Átváltás ml-ből grammra (1 ml = 1.055 g alkohol)
    const volumeOfDistribution = weight * distribution;
    const bloodAlcoholContent = gramsOfAlcohol / volumeOfDistribution - soberingRate * timeSinceLastDrink;

    return bloodAlcoholContent;
  }
}
