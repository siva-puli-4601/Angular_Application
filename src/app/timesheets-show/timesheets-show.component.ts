import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timesheets-show',
  templateUrl: './timesheets-show.component.html',
  styleUrls: ['./timesheets-show.component.css']
})
export class TimesheetsShowComponent implements OnInit {

  constructor(private ser:DataService,private route:Router) { }
  timesheets:any;
  ngOnInit(): void {
    const data=
    {
      "email": localStorage.getItem('email')
    }
    console.log(data);
    this.ser.postApi("timesheetsShow",data).subscribe((data)=>{
     this.timesheets=data.message;
    },
  (err)=>
  {
    console.log('error:',err);
    alert('error occured');
    this.route.navigate(['/admin']);
  })
  }
  DateConversion(value:any)
  {
    return new Date(value).toLocaleString();
  }

}
