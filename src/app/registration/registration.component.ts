import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormBuilder, FormArray, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckPassword,CheckUsername } from './registrationValidations';
import { HeaderComponent } from '../header/header.component';
// import { subscribe } from 'diagnostics_channel';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  reactiveform: any;
  constructor(public fb: FormBuilder, public ser: DataService,public route:Router) {}

  ngOnInit() {
    this.reactiveform = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), CheckUsername(/^[a-zA-Z0-9_-]{3,16}$/)]],
      password: [''],
      conformpass: [''],
      role:['', Validators.required],
      address: this.fb.group({
        city: [''],
        country: [''],
        pincode: ['']
      }),
      email:[""],
      imageUrl:['']
    }
    ,{validator:CheckPassword()});
  }

 

  onSubmit() {
     const res=this.reactiveform.value;
     this.ser.postApi("register",res).subscribe((data)=>{
      console.log(data);
     },
    (err)=>{
      console.log(err);
    })
    this.route.navigate(["/login"]);
  } 
}


