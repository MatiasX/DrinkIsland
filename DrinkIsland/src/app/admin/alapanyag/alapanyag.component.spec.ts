import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlapanyagokComponent } from './alapanyag.component';

describe('AlapanyagComponent', () => {
  let component: AlapanyagokComponent;
  let fixture: ComponentFixture<AlapanyagokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlapanyagokComponent]
    });
    fixture = TestBed.createComponent(AlapanyagokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
