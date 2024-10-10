import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentEmployee } from './home/home.component';
import { LeaveComponent } from '../leave/leave.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { CalenderComponent } from './calender/calender.component';
import { ShowLeavesComponent } from '../show-leaves/show-leaves.component';
import { EmployeeSerachComponent } from '../employee-serach/employee-serach.component';
import { TimesheetComponent } from '../timesheet/timesheet.component';
import { TimesheetsShowComponent } from '../timesheets-show/timesheets-show.component';
import { ChatUiComponent } from '../chat-ui/chat-ui.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'leave', component: LeaveComponent },
  {path:"calender", component:CalenderComponent},
  {path:"checkleaves",component:ShowLeavesComponent},
  {path:"employeesearch", component:EmployeeSerachComponent},
  {path:"timesheet", component:TimesheetComponent},
  {path:"timesheetshow", component:TimesheetsShowComponent},
  {path:"chat", component:ChatUiComponent},
  { path: '**', redirectTo: '' }, // Redirect unknown routes to home or a not-found page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmplModuleRoutingModule { }
