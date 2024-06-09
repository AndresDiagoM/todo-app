import { Component, HostListener, signal, ElementRef, computed } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Task } from '../../../models/task.model'
import { ReactiveFormsModule, FormsModule, FormControl, Validators } from '@angular/forms'

type FilterValues = 'all' | 'completed' | 'pending'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // --------- Properties ---------
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'First Task',
      description: 'This is the first task',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Second Task',
      description: 'This is the second task',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Third Task',
      description: 'This is the third task',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Correr',
      description: 'Correr en la mañana',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Leer',
      description: 'Correr en la mañana',
      completed: true
    }
  ])
  editingItem: Task | null = null
  newTaskControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required]
  })
  filter = signal<FilterValues>('all')
  filteredTasks = computed(() => {
    const filter = this.filter()
    const tasks = this.tasks()
    console.log('Filtering tasks', filter) // Debugging line
    // each time one of the filter or tasks signals change, this function will be called
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed)
    } else if (filter === 'pending') {
      return tasks.filter((task) => !task.completed)
    } else {
      return tasks
    }
  })

  // --------- Constructor ---------

  constructor(private eRef: ElementRef) {}

  // --------- Methods ---------
  addTask() {
    const newTaskValue = this.newTaskControl.value.trim()
    if (this.newTaskControl.invalid || !newTaskValue) return

    const newTask = this.createTask(newTaskValue)
    this.tasks.update((tasks) => [...tasks, newTask])

    this.newTaskControl.reset()
  }

  createTask(title: string) {
    return {
      id: Date.now(),
      title: title,
      description: '',
      completed: false
    }
  }

  toggleCompleted(index: number) {
    this.tasks.update((tasks) =>
      tasks.map((task, i) => {
        if (i === index) {
          task.completed = !task.completed
        }
        return task
      })
    )
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: { target: any }) {
    // Only proceed if editingItem is not null (indicating an active editing mode)
    if (this.editingItem !== null && !this.eRef.nativeElement.contains(event.target)) {
      this.editingItem = null // Close editing mode
    }
    console.log('Document clicked', event) // Debugging line
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, i) => i !== index))
  }

  changeFilter(filter: FilterValues) {
    this.filter.set(filter)
    console.log('Filter changed', filter) // Debugging line
  }
}
