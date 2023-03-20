import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paychild2021Component } from './paychild2021.component';

describe('Paychild2021Component', () => {
  let component: Paychild2021Component;
  let fixture: ComponentFixture<Paychild2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paychild2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paychild2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
