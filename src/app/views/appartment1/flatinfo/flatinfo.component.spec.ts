import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatinfoComponent } from './flatinfo.component';

describe('FlatinfoComponent', () => {
  let component: FlatinfoComponent;
  let fixture: ComponentFixture<FlatinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
