import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DataService } from '../data.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent  {
  
  constructor(private ser:DataService) { }
  role=localStorage.getItem('role');
  selectedWeek = 6;
  totalhours=0;
  weekDates = this.getWeekDates(); // Assuming this is a method to get the week's dates
  dayEntries = Array(7).fill(0); // Initialize with 0 hours for each day
  scheduledHours = 0;
  
  onDateSelected(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    if (selectedDate) {
      this.weekDates = this.getWeekDates(selectedDate);
    }
  }

  newTimeEntry() {
    console.log('New time entry clicked');
  }

  previousWeek() {
    // Decrease the current date by 7 days to get the previous week
    const firstDayOfCurrentWeek = this.weekDates[0];
    const previousWeekStart = new Date(firstDayOfCurrentWeek.setDate(firstDayOfCurrentWeek.getDate() - 7));
  
    // Update the weekDates array to show the previous week's dates
    this.weekDates = this.getWeekDates(previousWeekStart);
  }
  

  nextWeek() {
    // Increase the current date by 7 days to get the next week
    const firstDayOfCurrentWeek = this.weekDates[0];
    const nextWeekStart = new Date(firstDayOfCurrentWeek.setDate(firstDayOfCurrentWeek.getDate() + 7));
  
    // Update the weekDates array to show the next week's dates
    this.weekDates = this.getWeekDates(nextWeekStart);
  }
  

  downloadReport() {
    console.log('Download report clicked');
    console.log(this.weekDates)
    // Logic for downloading the report
  }

  totalHours() {
    this.totalhours=this.dayEntries.reduce((acc, hours) => acc + +hours, 0);
    return  this.totalhours;
  }

  getWeekDates(selectedDate: Date = new Date()) {
    const startOfWeek = selectedDate.getDate() - selectedDate.getDay();
    
    return Array.from({ length: 7 }, (_, i) => new Date(selectedDate.setDate(startOfWeek + i)));
  }
  submitTimesheet()
  {
     const data={
      "startdate":this.weekDates[0],
      "enddate":this.weekDates[6],
      "status":"submitted",
      "totalhours": this.totalhours,
      "email":localStorage.getItem("email"),
      "username":localStorage.getItem("username")
     }
     this.ser.postApi("timesheet", data).subscribe((data)=>
    {
      alert("sucessfully updated");

    },
     (err)=>
    {
      console.log(err);
      alert("failed to update");
    })
  }
}