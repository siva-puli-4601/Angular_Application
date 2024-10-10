import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../Employees/footer/footer.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { RouterModule } from '@angular/router'; // Correct import
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LeaveComponent } from '../leave/leave.component';

import { ShowLeavesComponent } from '../show-leaves/show-leaves.component';
import { LeaveComponent } from '../leave/leave.component';
import { EmployeeSerachComponent } from '../employee-serach/employee-serach.component';
import { TimesheetComponent } from '../timesheet/timesheet.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TimesheetsShowComponent } from '../timesheets-show/timesheets-show.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LeaveComponent,
    ShowLeavesComponent,
    EmployeeSerachComponent,
    TimesheetComponent,
    TimesheetsShowComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  exports: [HeaderComponent, FooterComponent, DashboardComponent,TimesheetsShowComponent,LeaveComponent,ShowLeavesComponent,EmployeeSerachComponent,TimesheetComponent]
})
export class SharedModule { }
