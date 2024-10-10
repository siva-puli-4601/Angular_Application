import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-recquirement',
  templateUrl: './recquirement.component.html',
  styleUrls: ['./recquirement.component.css']
})
export class RecquirementComponent {
  searchForm: FormGroup;
  searchResults: any[] = [];
  isLoading: boolean = false; 

  constructor(private fb: FormBuilder,private ser:DataService) {
    this.searchForm = this.fb.group({
      skills: [''],
      limit:[4]
    });
  }

  onSearch() {
    if (this.searchForm.valid) {
      this.isLoading= true; 
      const skills = this.searchForm.get('skills')?.value;
      const limit=this.searchForm.get('limit')?.value;
      const body={
        "skills":skills,
        "limit":limit
      }
      this.ser.postApi("search-resumes",body).subscribe((data)=>
      {
        this.searchResults = data.results;
        this.isLoading = false;
      })
      
     
    }
  }
}

