import { Component, Renderer2 } from '@angular/core';
import { DataService } from '../data.service';
import { marked } from 'marked';
import { remark } from 'remark';
import html from 'remark-html';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import hljs from 'highlight.js';


interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatSession {
  date: Date;
  messages: Message[];
}

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})

export class ChatUiComponent {
  isSidebarHidden:any = false;
  displaydata:any;
  userInput: string = '';  // For two-way binding to textarea input
  previousChats: ChatSession[] = [];  // Stores previous chats
  currentChat: ChatSession = { date: new Date(), messages: [] };  // Current chat session
  isDarkTheme: boolean = false;  // Toggle between dark and light themes

  constructor(private renderer: Renderer2, private ser: DataService) {
    marked.setOptions({
      highlight: function (code:any, lang:any) {
        return hljs.highlightAuto(code).value;
      }
    });
    // Load previous chats from localStorage when the component is initialized
    const storedChats = localStorage.getItem('previousChats');
    if (storedChats) {
      this.previousChats = JSON.parse(storedChats);
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark' ? true : false;
    if (this.isDarkTheme) {
      this.renderer.addClass(document.documentElement, 'dark-theme');
    }
  }

  // Sends the user's message and handles bot's response
  sendMessage() {
    const data = this.userInput;
    if (data.trim()) {
      // Add the user's message to the current chat
      this.currentChat.messages.push({ text: data, sender: 'user' });
      console.log(this.currentChat)
      // Simulate a delay for the bot's response
      setTimeout(() => {
        const body = { "message": data };
        console.log(body);
  
        // Send the message to the API via DataService
        this.ser.postApi("chatbot", body).subscribe(async (response: any) => {
          // Parse the response message as Markdown using 'marked'
          const convertedMarkdown = await marked(response.message);
  
          // Add bot response to the chat (parsed as HTML)
          console.log(convertedMarkdown);
          let cnt=0;
          const interval=setInterval(() => {
            this.displaydata+=convertedMarkdown[cnt];
            cnt++;
            if(cnt>=convertedMarkdown.length)
            {
              clearInterval(interval);
            }

          },100)
          this.currentChat.messages.push({ text: convertedMarkdown, sender: 'bot' });
        }, (err: any) => {
          console.log("Failed to get data", err.message);
          // Handle API failure with an error message from the bot
          this.currentChat.messages.push({ text: "Sorry, I couldn't respond.", sender: 'bot' });
        });
  
      }, 1000);  // Adjust delay time for response simulation
  
      // Clear the input after sending
      this.userInput = '';  // Reset the userInput bound to textarea
    }
  }
  
  // formatMessage(text: string): string {
  //   // Regex to match code blocks
  //   const codeBlockRegex = /```([^`]+)```/g;
  //   return text.replace(codeBlockRegex, (match, code) => {
  //     return `<pre><code>${code.trim()}</code></pre>`;
  //   });
  // }

  // Save the current chat and reset for a new session
  saveChat() {
    if (this.currentChat.messages.length) {
      this.previousChats.push({ ...this.currentChat });
      this.currentChat = { date: new Date(), messages: [] };
      // Save previous chats to localStorage
      localStorage.setItem('previousChats', JSON.stringify(this.previousChats));
    }
  }

  // Load a previous chat into the current chat window
  loadChat(index: number) {
    this.currentChat = this.previousChats[index];
  }

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
  // Toggle between dark and light themes
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.renderer.addClass(document.documentElement, 'dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
