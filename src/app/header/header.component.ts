import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {

  constructor(public ser:ServiceService,private route:Router){}

  islogin:boolean = false;

  profilePic:any = null;
  dropdownVisible=false;
  value:boolean = false;
  user:any;
  username:any;
  profile:any;
  ngOnInit() {
    // Safely check for the key in localStorage
    const savedState = localStorage.getItem('islogin');
    this.value = savedState === 'true'; // Default to false if key is not foun
    if(savedState==="true")
    {
      this.user=localStorage.getItem('role');
      this.islogin=true;
      this.username=localStorage.getItem('username');
      this.profile=localStorage.getItem('profile');
      this.profilePic=this.profile;
    }
  
}
toggleDropdown()
{
  this.dropdownVisible=!this.dropdownVisible;
} 

logOut()
  {
    localStorage.removeItem('islogin');
    localStorage.removeItem('username');
    localStorage.removeItem('profile');
    localStorage.removeItem('role');
    this.value=false;
    this.route.navigate(['/login']);
  }

}


