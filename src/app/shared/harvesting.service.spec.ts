import { TestBed, inject } from '@angular/core/testing';

import { HarvestingService } from './harvesting.service';

describe('HarvestingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HarvestingService]
    });
  });

  it('should be created', inject([HarvestingService], (service: HarvestingService) => {
    expect(service).toBeTruthy();
  }));
});
