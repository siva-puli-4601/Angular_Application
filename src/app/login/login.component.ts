import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { checkEmail,checkPassword } from './loginvalues';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ReactiveForm:any;

  constructor(private fb: FormBuilder,private route:Router,private ser:ServiceService,private dataser:DataService) {}

  ngOnInit() {
    this.ReactiveForm = this.fb.group({
      email: ["", [Validators.required, checkEmail(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ["", [Validators.required, checkPassword(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    });
  }

  onSubmit() {
     const data=this.ReactiveForm.value;
     this.dataser.postApi("login",data).subscribe((data)=>
    {
      const {email,role,username,profile}=data.message;
      localStorage.setItem('email',email);
      localStorage.setItem('islogin',"true");
      localStorage.setItem('role',role);
      localStorage.setItem('username',username);
      localStorage.setItem('profile',profile);
      if(role==='employee'){
      this.route.navigate(["/employee"]);
      }
      else if(role==='admin')
      {
        this.route.navigate(["/admin"]);
      }
      else
      {
        this.route.navigate(["/student"]);
      }
    },
  (err)=>
  {
    alert("failed to login check your credentials");
    console.log(err)
  })
     
    
    }

    
   
  }


