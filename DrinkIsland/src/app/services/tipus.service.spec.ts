import { TestBed } from '@angular/core/testing';

import { TipusService } from './tipus.service';

describe('TipusService', () => {
  let service: TipusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
