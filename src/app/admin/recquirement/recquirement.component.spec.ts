import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecquirementComponent } from './recquirement.component';

describe('RecquirementComponent', () => {
  let component: RecquirementComponent;
  let fixture: ComponentFixture<RecquirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecquirementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecquirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
