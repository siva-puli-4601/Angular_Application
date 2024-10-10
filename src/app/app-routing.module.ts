import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DisplayComponent } from './display/display.component';
import { AuthGuard, CheckGuard } from './guards/auth.guard';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckGuardGuard } from './check-guard.guard';
import { HomeComponentAdmin } from './admin/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HomeComponentEmployee } from './Employees/home/home.component';
import { ErrorComponent } from './error/error.component';
import { HomestudentComponent } from './student/homestudent/homestudent.component';

const routes: Routes = [
  { path: "", component:HomeComponent },
  {path: "login",component:LoginComponent},
  {path: "register",component:RegistrationComponent},
  {path:"display", component:DisplayComponent, resolve:{
    data: AuthGuard
  }},
  {path:"about", component:AboutComponent},
  {path:"profile", component:ProfileComponent, canActivate:[CheckGuardGuard]},
   
    {
      path: '',
      component: HomeComponentEmployee,
      children: [
        { path: '', component: DashboardComponent },
    {path: 'employee', loadChildren: () => import('./Employees/empl-module.module').then(m => m.EmplModuleModule), canActivate:[CheckGuardGuard]}
      ]
  },
  {
    path: '',
    component: HomeComponentAdmin,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[CheckGuardGuard]},
      
      // Define other routes here
    ]
  },
  {path:"error", component:ErrorComponent},
  {
    path: '',
    component: HomestudentComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
      
      // Define other routes here
    ]
  },
  
  {path:"**", redirectTo:"/error"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
