import { TestBed } from '@angular/core/testing';

import { Payinfo2021Service } from './payinfo2021.service';

describe('Payinfo2021Service', () => {
  let service: Payinfo2021Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Payinfo2021Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
