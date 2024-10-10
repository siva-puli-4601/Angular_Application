import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSerachComponent } from './employee-serach.component';

describe('EmployeeSerachComponent', () => {
  let component: EmployeeSerachComponent;
  let fixture: ComponentFixture<EmployeeSerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSerachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
