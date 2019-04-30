import { TestBed } from '@angular/core/testing';

import { MSAPIService } from './ms-api.service';

describe('MSAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MSAPIService = TestBed.get(MSAPIService);
    expect(service).toBeTruthy();
  });
});
