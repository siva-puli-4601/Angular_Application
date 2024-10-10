import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaycomponentComponent } from './holidaycomponent.component';

describe('HolidaycomponentComponent', () => {
  let component: HolidaycomponentComponent;
  let fixture: ComponentFixture<HolidaycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaycomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidaycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
