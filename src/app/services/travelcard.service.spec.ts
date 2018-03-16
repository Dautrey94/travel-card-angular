import { TestBed, inject } from '@angular/core/testing';

import { TravelcardService } from './travelcard.service';

describe('TravelcardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelcardService]
    });
  });

  it('should be created', inject([TravelcardService], (service: TravelcardService) => {
    expect(service).toBeTruthy();
  }));
});
