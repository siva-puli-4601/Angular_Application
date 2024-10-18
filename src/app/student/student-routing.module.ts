import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

const routes: Routes = [{ path: '', component: StudentComponent },
  { path:"submitresume",component:ResumeUploadComponent},
  {path:"ailearning", component:StudentDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
