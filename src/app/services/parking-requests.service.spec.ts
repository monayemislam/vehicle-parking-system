import { TestBed } from '@angular/core/testing';

import { ParkingRequestsService } from './parking-requests.service';

describe('ParkingRequestsService', () => {
  let service: ParkingRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
