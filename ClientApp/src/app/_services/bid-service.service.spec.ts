import { TestBed } from '@angular/core/testing';

import { BidServiceService } from './bid-service.service';

describe('BidServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BidServiceService = TestBed.get(BidServiceService);
    expect(service).toBeTruthy();
  });
});
