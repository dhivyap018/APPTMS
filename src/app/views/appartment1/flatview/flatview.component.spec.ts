import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatviewComponent } from './flatview.component';

describe('FlatviewComponent', () => {
  let component: FlatviewComponent;
  let fixture: ComponentFixture<FlatviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
