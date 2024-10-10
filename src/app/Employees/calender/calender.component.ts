import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  currentYear: number;
  currentMonth: number;
  daysInMonth: number[] = [];
  holidays: { [key: string]: boolean } = {};
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.initializeHolidays();
    this.generateCalendar();
  }

  ngOnInit(): void {}

  initializeHolidays(): void {
    this.holidays = {
      '2024-01-01': true,
      '2024-12-25': true,
      '2024-06-04':true,
      '2025-06-04':true,
      // Add more holidays here
    };
  }

  generateCalendar(): void {
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  isHoliday(day: number): boolean {
    const dateStr = `${this.currentYear}-${this.pad(this.currentMonth + 1)}-${this.pad(day)}`;
    return !!this.holidays[dateStr];
  }

  pad(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }

  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }
}

