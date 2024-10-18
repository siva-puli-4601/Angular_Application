import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homestudent',
  templateUrl: './homestudent.component.html',
  styleUrls: ['./homestudent.component.css']
})
export class HomestudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isSidebarVisible = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    const toggleButton = document.querySelector('.toggle-button') as HTMLElement;

    if (toggleButton) {
        if (this.isSidebarVisible) {
            toggleButton.style.left = '220px'; // Position it next to the sidebar
        } else {
            toggleButton.style.left = '10px';  // Move it to the edge when sidebar is hidden
        }
    }
}

}

