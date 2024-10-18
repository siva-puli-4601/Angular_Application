import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { HomestudentComponent } from './homestudent/homestudent.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';


@NgModule({
  declarations: [
    StudentComponent,
    HomestudentComponent,
    SidebarComponent,
    ResumeUploadComponent,
    StudentDashboardComponent,
    
  ],
  imports: [
    
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
