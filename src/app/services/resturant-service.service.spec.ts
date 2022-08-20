import { TestBed } from '@angular/core/testing';

import { ResturantServiceService } from './resturant-service.service';

describe('ResturantServiceService', () => {
  let service: ResturantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
