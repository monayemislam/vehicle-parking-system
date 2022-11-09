import { TestBed } from '@angular/core/testing';

import { GeoLocationApiService } from './geo-location-api.service';

describe('GeoLocationApiService', () => {
  let service: GeoLocationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoLocationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
