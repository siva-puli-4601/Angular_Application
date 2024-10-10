import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetrequestsComponent } from './timesheetrequests.component';

describe('TimesheetrequestsComponent', () => {
  let component: TimesheetrequestsComponent;
  let fixture: ComponentFixture<TimesheetrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetrequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
