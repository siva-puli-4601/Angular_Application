import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { EmplModuleRoutingModule } from './empl-module-routing.module';
import { EmplModuleComponent } from './empl-module.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponentEmployee } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { LeaveComponent } from '../leave/leave.component';
import { CalenderComponent } from './calender/calender.component';
import { HolidaycomponentComponent } from './holidaycomponent/holidaycomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowLeavesComponent } from '../show-leaves/show-leaves.component';


@NgModule({
  declarations: [
    EmplModuleComponent,
    HomeComponentEmployee,
    SidebarComponent,
    // LeaveComponent,
    CalenderComponent,
    HolidaycomponentComponent,
    // ShowLeavesComponent
  ],
  imports: [
    CommonModule,
    EmplModuleRoutingModule,
    SharedModule,
  ]
})
export class EmplModuleModule { }
