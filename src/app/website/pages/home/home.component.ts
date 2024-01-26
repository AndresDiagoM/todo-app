import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // --------- Properties ---------
  tasks = signal([
    { title: 'First Task', description: 'This is the first task', completed: false },
    { title: 'Second Task', description: 'This is the second task', completed: false },
    { title: 'Third Task', description: 'This is the third task', completed: false }
  ]);

  // --------- Constructor ---------

  constructor() { }

  // --------- Methods ---------
  addTask($event: any) {
    let newTask = {
      title: $event.target.value ,
      description: 'This is the fourth task',
      completed: false
    };
    this.tasks.update(tasks => [...tasks, newTask]);
  }
}
