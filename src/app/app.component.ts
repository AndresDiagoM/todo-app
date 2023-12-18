import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WebsiteModule } from './website/website.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WebsiteModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  // --------- Properties ---------
  title = 'todoapp';
  tasks = [
    { title: 'First Task', description: 'This is the first task', completed: false },
    { title: 'Second Task', description: 'This is the second task', completed: false },
    { title: 'Third Task', description: 'This is the third task', completed: false }
  ];


  // --------- Constructor ---------


  // --------- Methods ---------
}
