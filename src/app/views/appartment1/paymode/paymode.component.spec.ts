import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymodeComponent } from './paymode.component';

describe('PaymodeComponent', () => {
  let component: PaymodeComponent;
  let fixture: ComponentFixture<PaymodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
