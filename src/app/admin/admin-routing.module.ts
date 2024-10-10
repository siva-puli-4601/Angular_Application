import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LeaverequestsComponent } from './leaverequests/leaverequests.component';
import { HomeComponentAdmin } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveComponent } from '../leave/leave.component';
import { ShowLeavesComponent } from '../show-leaves/show-leaves.component';
import { EmployeeSerachComponent } from '../employee-serach/employee-serach.component';
import { TimesheetComponent } from '../timesheet/timesheet.component';
import { TimesheetrequestsComponent } from './timesheetrequests/timesheetrequests.component';
import { TimesheetsShowComponent } from '../timesheets-show/timesheets-show.component';
import { RecquirementComponent } from './recquirement/recquirement.component';

const routes: Routes = [
  // {path:"", component:AdminComponent},
  {path:'',component:DashboardComponent},
  { path: 'leaverequests', component: LeaverequestsComponent },
  {path:"leave", component: LeaveComponent},
  {path:"checkleaves", component:ShowLeavesComponent},
  {path:"employeesearch", component:EmployeeSerachComponent},
  {path:"timesheet", component:TimesheetComponent},
  {path:"timesheetrequest",component:TimesheetrequestsComponent},
  {path:"timesheetshow", component:TimesheetsShowComponent},
  {path:"searchresume", component:RecquirementComponent},

  { path: '**', redirectTo: '' } // Redirect unknown routes to home or a not-found page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
