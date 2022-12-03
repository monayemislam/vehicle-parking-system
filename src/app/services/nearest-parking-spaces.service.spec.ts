import { TestBed } from '@angular/core/testing';

import { NearestParkingSpacesService } from './nearest-parking-spaces.service';

describe('NearestParkingSpacesService', () => {
  let service: NearestParkingSpacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NearestParkingSpacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
