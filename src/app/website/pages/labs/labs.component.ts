import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.sass'
})
export class LabsComponent {

  // --------- Properties ---------
  title = 'todoapp';
  tasks = [
    { title: 'First Task', description: 'This is the first task', completed: false },
    { title: 'Second Task', description: 'This is the second task', completed: false },
    { title: 'Third Task', description: 'This is the third task', completed: false }
  ];
}
