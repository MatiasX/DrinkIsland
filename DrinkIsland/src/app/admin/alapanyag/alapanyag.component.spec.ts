import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlapanyagComponent } from './alapanyag.component';

describe('AlapanyagComponent', () => {
  let component: AlapanyagComponent;
  let fixture: ComponentFixture<AlapanyagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlapanyagComponent]
    });
    fixture = TestBed.createComponent(AlapanyagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
