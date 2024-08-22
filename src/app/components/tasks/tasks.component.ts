import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../task/types';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  todo: Task[] = [
    { title: 'Buy milk', description: 'Go to the store and buy milk', list: 'todo' },
    { title: 'Drawing on canvas', description: 'Buy 3 canvas and pens!', list: 'todo' }
  ];
  inProgress: Task[] = [];
  done: Task[] = [];


  addTaskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  
  onSubmit(): void {
    const newTask: Task = {
      title: this.addTaskForm.get('title')?.value || '',  
      description: this.addTaskForm.get('description')?.value || '',  
      list: 'todo', 
    };
    this.todo.push(newTask);  
    this.addTaskForm.reset();  
  }


  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) return; 
    transferArrayItem(
      event.previousContainer.data,  
      event.container.data, 
      event.previousIndex,  
      event.currentIndex 
    );
  }

  deleteIt(list: string, task: Task): void {
    let index;
    if (list === 'todo') {
      index = this.todo.indexOf(task); 
      this.todo.splice(index, 1); 
    } else if (list === 'inProgress') {
      index = this.inProgress.indexOf(task);  
      this.inProgress.splice(index, 1); 
    } else if (list === 'done') {
      index = this.done.indexOf(task);  
      this.done.splice(index, 1); 
    }
  }
}
