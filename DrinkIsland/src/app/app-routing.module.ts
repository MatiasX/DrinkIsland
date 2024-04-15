// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AlcoholicDrinksComponent } from './recipes/alcoholic-drinks/alcoholic-drinks.component';
import { NonAlcoholicDrinksComponent } from './recipes/non-alcoholic-drinks/non-alcoholic-drinks.component';
import { DetailedSearchComponent } from './recipes/detailed-search/detailed-search.component';
import { IngredientsComponent } from './coctailblog/ingredients.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { JustsignupComponent } from './justsignup/justsignup.component';
import { SupportComponent } from './support/support.component';
import { AlapanyagComponent } from './admin/alapanyag/alapanyag.component';
import { ItalComponent } from './admin/ital/ital.component';
import { ReceptComponent } from './admin/recept/recept.component';
import { UserComponent } from './admin/user/user.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', redirectTo: 'recipes/alcoholic', pathMatch: 'full' },
  { path: 'recipes/alcoholic', component: AlcoholicDrinksComponent },
  { path: 'recipes/non-alcoholic', component: NonAlcoholicDrinksComponent },
  { path: 'recipes/detailed-search', component: DetailedSearchComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'loginsignup', component: LoginsignupComponent },
  { path: 'justsignup', component: JustsignupComponent },
  { path: 'support', component: SupportComponent },
  { path: 'alapanyag', component: AlapanyagComponent },
  { path: 'ital', component: ItalComponent },
  { path: 'recept', component: ReceptComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
