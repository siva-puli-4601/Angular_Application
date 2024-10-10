import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplModuleComponent } from './empl-module.component';

describe('EmplModuleComponent', () => {
  let component: EmplModuleComponent;
  let fixture: ComponentFixture<EmplModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
