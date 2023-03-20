import { TestBed } from '@angular/core/testing';

import { PaylistserviceService } from './paylistservice.service';

describe('PaylistserviceService', () => {
  let service: PaylistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaylistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
