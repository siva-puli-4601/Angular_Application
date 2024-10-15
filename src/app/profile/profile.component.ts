import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData:any;
  constructor(private ser:DataService) { }

  ngOnInit(): void {
    const email=localStorage.getItem('email');
    const send={"email":email};
    this.ser.postApi("profile",send).subscribe((data:any)=>{
      console.log(data.message);
      this.userData=data.message;
    },
  (err)=>
  {
    console.log("ding ding");
    
  })
  }
  showModal = false;

  openImageModal() {
    this.showModal = true;
  }

  closeImageModal() {
    this.showModal = false;
  }

}
