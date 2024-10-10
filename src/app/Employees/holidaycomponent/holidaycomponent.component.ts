import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-holidaycomponent',
  template: `
    <h2>Holiday on {{ data.date }}</h2>
    <p>{{ data.reason }}</p>
    <button mat-button (click)="onClose()">Close</button>
  `,
  styleUrls: ['./holidaycomponent.component.css']
})
export class HolidaycomponentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HolidaycomponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { date: string, reason: string }
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
