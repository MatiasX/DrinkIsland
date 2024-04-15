import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptComponent } from './recept.component';

describe('ReceptComponent', () => {
  let component: ReceptComponent;
  let fixture: ComponentFixture<ReceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptComponent]
    });
    fixture = TestBed.createComponent(ReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
