import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-show-leaves',
  templateUrl: './show-leaves.component.html',
  styleUrls: ['./show-leaves.component.css']
})
export class ShowLeavesComponent implements OnInit {

  constructor(private ser:DataService) { }

  leaveData:any;
  ngOnInit(): void {
    const email=localStorage.getItem('email');
    const data={
      "email":email
    }
  this.ser.postApi("leavesforeachperson",data).subscribe((data)=>{
     this.leaveData=data.message;
  },(err)=>
  {
   alert("failed to get data");
  })
  }

}
