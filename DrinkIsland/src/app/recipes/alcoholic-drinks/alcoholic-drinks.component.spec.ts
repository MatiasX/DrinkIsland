import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholicDrinksComponent } from './alcoholic-drinks.component';

describe('AlcoholicDrinksComponent', () => {
  let component: AlcoholicDrinksComponent;
  let fixture: ComponentFixture<AlcoholicDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlcoholicDrinksComponent]
    });
    fixture = TestBed.createComponent(AlcoholicDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
