import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FooterComponent } from './footer/footer.component';
import { AlcoholicDrinksComponent } from './recipes/alcoholic-drinks/alcoholic-drinks.component';
import { NonAlcoholicDrinksComponent } from './recipes/non-alcoholic-drinks/non-alcoholic-drinks.component';
import { DetailedSearchComponent } from './recipes/detailed-search/detailed-search.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { SupportComponent } from './support/support.component';
import { JustsignupComponent } from './justsignup/justsignup.component';
import { AlapanyagComponent } from './admin/alapanyag/alapanyag.component';
import { ItalComponent } from './admin/ital/ital.component';
import { ReceptComponent } from './admin/recept/recept.component';
import { UserComponent } from './admin/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RecipesComponent,
    IngredientsComponent,
    CalculatorComponent,
    FooterComponent,
    AlcoholicDrinksComponent,
    NonAlcoholicDrinksComponent,
    DetailedSearchComponent,
    LoginsignupComponent,
    SupportComponent,
    JustsignupComponent,
    AlapanyagComponent,
    ItalComponent,
    ReceptComponent,
    UserComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
