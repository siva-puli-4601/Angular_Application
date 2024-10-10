import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentAdmin } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponentAdmin;
  let fixture: ComponentFixture<HomeComponentAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponentAdmin ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
