import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // --------- Properties ---------
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'First Task',
      description: 'This is the first task',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'Second Task',
      description: 'This is the second task',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'Third Task',
      description: 'This is the third task',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'Correr',
      description: 'Correr en la mañana',
      completed: false,
    },
  ]);

  // --------- Constructor ---------

  constructor() {}

  // --------- Methods ---------
  addTask($event: any) {
    let newTask = {
      id: Date.now(),
      title: $event.target.value,
      description: 'This is the fourth task',
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  updateTask(index: number) {
    this.tasks.update((tasks) =>
      tasks.map((task, i) => {
        if (i === index) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }

  toggleCompleted(index: number) {
    this.tasks.update((tasks) =>
      tasks.map((task, i) => {
        if (i === index) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, i) => i !== index));
  }
}
