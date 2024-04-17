import { TestBed } from '@angular/core/testing';

import { ReceptekService } from './receptek.service';

describe('ReceptekService', () => {
  let service: ReceptekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
