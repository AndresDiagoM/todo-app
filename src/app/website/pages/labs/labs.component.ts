import { Component, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormControl, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.sass'
})
export class LabsComponent {
  // --------- Properties ---------
  title = 'todoapp'
  tasks = signal([
    { title: 'First Task', description: 'This is the first task', completed: false },
    { title: 'Second Task', description: 'This is the second task', completed: false },
    { title: 'Third Task', description: 'This is the third task', completed: false }
  ])
  isDisabled = true
  person = {
    name: 'John',
    age: 20
  }
  name = signal('John')
  person2 = signal({
    name: 'Alice',
    age: 21
  })
  // for handling the form submission
  colorCtrl = new FormControl('')

  // --------- Constructor ---------
  constructor() {
    this.colorCtrl.valueChanges.subscribe((value) => {
      console.log('Color', value)
    })
  }

  // --------- Methods ---------
  onClick($event: any) {
    console.log('Clicked', $event.target.value)
  }

  keydownHandler($event: any) {
    console.log('Keydown', $event.target.value)
  }

  changeHandler($event: any) {
    console.log('Change', $event.target.value)
  }

  signalHandler($event: any) {
    console.log('Signal', $event.target.value)
    this.name.set($event.target.value)
  }

  signalHandler2($event: any) {
    console.log('Signal2', $event.target.value)
    this.person2.set({ name: 'Alice', age: $event.target.value })
  }
}
