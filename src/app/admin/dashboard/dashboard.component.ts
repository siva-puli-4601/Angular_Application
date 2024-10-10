import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }


  images=["assets/miracle.jfif","assets/miracle1.jfif","assets/miracle2.jfif","assets/miracle3.jfif"];


  ngOnInit(): void {
  }

}
