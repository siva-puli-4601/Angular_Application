import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetsShowComponent } from './timesheets-show.component';

describe('TimesheetsShowComponent', () => {
  let component: TimesheetsShowComponent;
  let fixture: ComponentFixture<TimesheetsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetsShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
