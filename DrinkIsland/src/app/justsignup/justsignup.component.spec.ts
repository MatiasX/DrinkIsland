import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustsignupComponent } from './justsignup.component';

describe('JustsignupComponent', () => {
  let component: JustsignupComponent;
  let fixture: ComponentFixture<JustsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JustsignupComponent]
    });
    fixture = TestBed.createComponent(JustsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
