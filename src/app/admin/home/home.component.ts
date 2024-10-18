import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentAdmin implements OnInit {

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
