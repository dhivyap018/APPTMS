import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdeitComponent } from './userdeit.component';

describe('UserdeitComponent', () => {
  let component: UserdeitComponent;
  let fixture: ComponentFixture<UserdeitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdeitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
