// src/app/task-list/task-list.component.ts
import {Component, OnInit} from '@angular/core';
import {TaskService, Task} from '../services/task.service';
import {ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {AddTaskComponent} from '../add-task/add-task.component';
import {TaskItemComponent} from '../task-item/task-item.component';


@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: 'task-list-component.html',
  imports: [ReactiveFormsModule, NgIf, AddTaskComponent, TaskItemComponent, NgForOf],

})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [<Task>{'title': 'hola', isCompleted: false, id: 2}];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {

    this.taskService.getTasks().subscribe((data) => (this.tasks = data));

  }

  addNewTask(title: string) {
    const newTask: Task = {title, isCompleted: false};
    this.taskService.addTask(newTask).subscribe(() => this.loadTasks());
  }

  toggleComplete(task: Task) {
    task.isCompleted = !task.isCompleted;
    this.taskService.updateTask(task).subscribe();
  }

  editTask(task: Task) {
    const newTitle = prompt('Edit task title', task.title);
    if (newTitle !== null && newTitle.trim() !== '') {
      task.title = newTitle;
      this.taskService.updateTask(task).subscribe(() => this.loadTasks());
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}
