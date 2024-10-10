import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  ele:any;
  constructor(private route:ActivatedRoute) { }
 type:any;
  ngOnInit(): void {
   this.ele=this.route.snapshot.data['data'];
   console.log(this.ele);
   if(this.ele.length!=0)
   {
    if(this.ele[0].type==='admin')
    {
      this.type='admin';
    }
    else
    this.type='user';
   }
   
  }

}
