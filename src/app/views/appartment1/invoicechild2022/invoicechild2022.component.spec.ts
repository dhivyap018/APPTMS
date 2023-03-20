import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoicechild2022Component } from './invoicechild2022.component';

describe('Invoicechild2022Component', () => {
  let component: Invoicechild2022Component;
  let fixture: ComponentFixture<Invoicechild2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoicechild2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invoicechild2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
