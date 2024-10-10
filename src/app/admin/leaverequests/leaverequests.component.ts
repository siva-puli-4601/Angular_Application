import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-leaverequests',
  templateUrl: './leaverequests.component.html',
  styleUrls: ['./leaverequests.component.css']
})
export class LeaverequestsComponent implements OnInit {

  constructor(private ser:DataService) { }
  leaveData:any;
  ngOnInit(): void {
  this.ser.getApi("leaverequests").subscribe((data)=>{
     this.leaveData=data.message;
     console.log(this.leaveData);
  },(err)=>
  {
   alert("failed to get data");
  })
  }
  acceptLeave(email:any)
  {
   
    const data={
      'email':email,
      'status':"accepted"
    };
    console.log(data);
     this.ser.postApi("leavechange",data).subscribe((data: any)=>{
        alert("sucessfully accepted");
        this.ngOnInit();
     },
    (err: any)=>{
      alert("failed to accepted");
    })
  }
  rejectLeave(email:any)
  {
    const data={
      'email':email,
      'status':"accepted"
    };
     this.ser.postApi("leavechange",data).subscribe((data: any)=>{
        alert("sucessfully rejected");
        this.ngOnInit();
     },
    (err: any)=>{
      alert("failed to rejected");
    })
  }

}
