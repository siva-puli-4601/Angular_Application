import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {


  ngOnInit(): void {
  }
  hasPreviousChats: boolean = false; // Change this based on actual data
  previousChats: { title: string }[] = []; // Array to hold previous chat data

  constructor() {
    // Simulate fetching previous chats (you can replace this with real data fetching)
    this.previousChats = [
      // { title: 'Chat with AI about Math' },
      // { title: 'Discussion on AI Trends' },
      // { title: 'Project Ideas for AI' }
    ];
    
    // Check if there are any previous chats
    this.hasPreviousChats = this.previousChats.length > 0;
  }

  startNewChat() {
    // Logic for starting a new chat
    console.log('Starting a new chat...');
  }

  openChat(chat: { title: string }) {
    // Logic to open a specific chat
    console.log('Opening chat:', chat.title);
  }
}
