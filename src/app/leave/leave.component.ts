import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  leaveForm: FormGroup | any;
  leaveTypes: string[] = ['Sick Leave', 'Casual Leave', 'Family Care', 'Govt Works', 'Religious Leave', 'Other'];
  role:any;
  constructor(private fb: FormBuilder,private ser:DataService,private route:Router) { }

  ngOnInit(): void {
    this.role="/"+localStorage.getItem('role');
    this.leaveForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      leaveType: ['', Validators.required],
      reason:['', Validators.required]
    });
  }

  onSubmit(): void {
    const email=localStorage.getItem('email');
    const username=localStorage.getItem('username');
    const {startDate,endDate,leaveType,reason}=this.leaveForm.value;
    const send={"email":email,"username":username,"startDate":startDate,"endDate":endDate,"leaveType":leaveType,"reason":reason};
    this.ser.postApi("leave",send).subscribe((data)=>
    {
      console.log(data.message);
      alert("Leave request sent successfully");
      this.leaveForm.reset();
      const role=localStorage.getItem('role');
      this.route.navigate([`/${role}`]);
    },
  (err)=>{
    alert("failed to leave request could you please try again");
  })
  }
  generateReason(reason:any):void{
    const body={
      "reason":reason,
      "startdate":this.leaveForm.value.startDate,
      "enddate":this.leaveForm.value.endDate,
      "type":this.leaveForm.value.leaveType
    }
       this.ser.postApi("genratereason",body).subscribe((data)=>{
        console.log(data.message);
        this.leaveForm.patchValue({reason:data.message});
       },
      (err)=>{
        alert("try once please"+err.message);
      })
  }
}
