import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedSearchComponent } from './detailed-search.component';

describe('DetailedSearchComponent', () => {
  let component: DetailedSearchComponent;
  let fixture: ComponentFixture<DetailedSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedSearchComponent]
    });
    fixture = TestBed.createComponent(DetailedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
