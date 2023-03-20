import { TestBed } from '@angular/core/testing';

import { ViewinvoiceserviceService } from './viewinvoiceservice.service';

describe('ViewinvoiceserviceService', () => {
  let service: ViewinvoiceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewinvoiceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
