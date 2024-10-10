import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponentAdmin } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LeaverequestsComponent } from './leaverequests/leaverequests.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterLink, RouterModule } from '@angular/router';
import { TimesheetrequestsComponent } from './timesheetrequests/timesheetrequests.component';
import { RecquirementComponent } from './recquirement/recquirement.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponentAdmin,
    SidebarComponent,
    LeaverequestsComponent,
    TimesheetrequestsComponent,
    RecquirementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class AdminModule { }
