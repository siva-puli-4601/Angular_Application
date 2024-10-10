import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-timesheetrequests',
  templateUrl: './timesheetrequests.component.html',
  styleUrls: ['./timesheetrequests.component.css']
})
export class TimesheetrequestsComponent implements OnInit {
  users:any;
  constructor(private ser:DataService) { }

  ngOnInit(): void {
    this.ser.getApi("gettimesheets").subscribe((data:any) => {
      this.users=data.message;
  },
(err:any) => {
  alert(err.message);
  })
  }
  acceptTimesheet(id:any)
  {
    const data={
      id:id,
      status:'accepted'
    }
     this.ser.postApi("gettimesheetsstatus",data).subscribe((data:any)=>
    {
      alert("Timesheet accepted");
      this.ngOnInit();
    },(err)=>
    {
      alert("Failed to accept timesheet");
      this.ngOnInit();
    })
  }
  rejectTimesheet(id:any)
  {
    const data={
      id:id,
      status:'rejected'
    }
     this.ser.postApi("gettimesheetsstatus",data).subscribe((data:any)=>
    {
      alert("Timesheet rejected");
      this.ngOnInit();
    },(err)=>
    {
      alert("Failed to accept rejected");
      this.ngOnInit();
    })
  }
  DateCast(value:any)
  {
    return new Date(value).toLocaleString();
  }

}
