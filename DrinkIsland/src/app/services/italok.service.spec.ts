import { TestBed } from '@angular/core/testing';

import { ItalokService } from './italok.service';

describe('ItalokService', () => {
  let service: ItalokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItalokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
