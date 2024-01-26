import { Component, signal } from '@angular/core';
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
  isDisabled = true;
  person = {
    name: 'John',
    age: 20
  };
  name = signal('John');


  // --------- Constructor ---------
  constructor() { }

  // --------- Methods ---------
  onClick($event: any) {
    console.log('Clicked', $event.target.value);
  }

  keydownHandler($event: any) {
    console.log('Keydown', $event.target.value);
  }

  changeHandler($event: any) {
    console.log('Change', $event.target.value);
  }

  signalHandler($event: any) {
    console.log('Signal', $event.target.value);
    this.name.set($event.target.value);
  }
}
