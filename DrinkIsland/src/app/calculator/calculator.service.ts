import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  calculateTimeToSober(weight: number, gender: string, drinks: { alcoholAmount: number, alcoholPercentage: number }[], timeSinceLastDrink: number): number {
    let soberingRate = gender === 'male' ? 0.148  : 0.156;
    let distribution = gender === 'male' ? 0.71  : 0.58;
    let gramsOfAlcohol=0;

    for (const drink of drinks) {
      gramsOfAlcohol += drink.alcoholAmount * drink.alcoholPercentage * 0.785; // Átváltás ml-ből grammra (1 ml = 0.785 g alkohol)
    }
    
    let volumeOfDistribution = weight * distribution;
    let bloodAlcoholContent = gramsOfAlcohol / volumeOfDistribution - soberingRate * timeSinceLastDrink;
    let soberingTime = bloodAlcoholContent/soberingRate;

    if (soberingTime<0)
      {
        soberingTime=0;
      }
    return soberingTime;
  }
  calculateBAC(weight: number, gender: string, drinks: { alcoholAmount: number, alcoholPercentage: number }[], timeSinceLastDrink: number): number {
    let soberingRate = gender === 'male' ? 0.148  : 0.156;
    let distribution = gender === 'male' ? 0.71  : 0.58;
    let gramsOfAlcohol=0;

    for (const drink of drinks) {
      gramsOfAlcohol += drink.alcoholAmount * drink.alcoholPercentage * 0.785; // Átváltás ml-ből grammra (1 ml = 0.785 g alkohol)
    }
    let volumeOfDistribution = weight * distribution;
    let bloodAlcoholContent = (gramsOfAlcohol / volumeOfDistribution - soberingRate * timeSinceLastDrink)/10;
    if (bloodAlcoholContent<0)
      {
        bloodAlcoholContent=0;
      }
    return bloodAlcoholContent;
  }
}
