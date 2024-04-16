import { TestBed } from '@angular/core/testing';

import { AlapanyagokService } from './alapanyagok.service';

describe('AlapanyagokService', () => {
  let service: AlapanyagokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlapanyagokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
