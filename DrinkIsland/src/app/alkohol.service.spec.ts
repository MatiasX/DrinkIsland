import { TestBed } from '@angular/core/testing';

import { AlkoholService } from './alkohol.service';

describe('AlkoholService', () => {
  let service: AlkoholService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlkoholService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
