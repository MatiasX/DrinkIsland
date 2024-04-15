import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalComponent } from './ital.component';

describe('ItalComponent', () => {
  let component: ItalComponent;
  let fixture: ComponentFixture<ItalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItalComponent]
    });
    fixture = TestBed.createComponent(ItalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
