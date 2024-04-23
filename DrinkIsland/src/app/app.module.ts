import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FooterComponent } from './footer/footer.component';
import { AlcoholicDrinksComponent } from './recipes/alcoholic-drinks/alcoholic-drinks.component';
import { NonAlcoholicDrinksComponent } from './recipes/non-alcoholic-drinks/non-alcoholic-drinks.component';
import { DetailedSearchComponent } from './recipes/detailed-search/detailed-search.component';
import { LoginsignupComponent } from './login/loginsignup.component';
import { JustsignupComponent } from './register/justsignup.component';
import { AlapanyagokComponent } from './admin/alapanyag/alapanyag.component';
import { ItalComponent } from './admin/ital/ital.component';
import { ReceptComponent } from './admin/recept/recept.component';
import { UserComponent } from './admin/user/user.component';
import { TipusComponent } from './admin/tipus/tipus.component';
import { BlogComponent } from './blog/blog.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { UserBlogComponent } from './user-blog/user-blog.component';
import { TypeSearchComponent } from './recipes/type-search/type-search.component';

const appRoutes: Routes = [
  {path: '', component:AlcoholicDrinksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RecipesComponent,
    CalculatorComponent,
    FooterComponent,
    AlcoholicDrinksComponent,
    NonAlcoholicDrinksComponent,
    DetailedSearchComponent,
    LoginsignupComponent,
    JustsignupComponent,
    AlapanyagokComponent,
    ItalComponent,
    ReceptComponent,
    UserComponent,
    TipusComponent,
    BlogComponent,
    AdminBlogComponent,
    UserBlogComponent,
    TypeSearchComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
