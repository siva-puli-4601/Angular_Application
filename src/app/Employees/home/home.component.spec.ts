import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentEmployee } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponentEmployee;
  let fixture: ComponentFixture<HomeComponentEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponentEmployee ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponentEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
