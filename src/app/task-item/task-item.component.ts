// src/app/task-item/task-item.component.ts
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../services/task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: 'task-item-component.html',
  styles: [
    `
      .completed {
        text-decoration: line-through;
      }
    `,
  ],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() complete = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  toggleComplete() {
    this.complete.emit();
  }

  editTask() {
    this.edit.emit();
  }

  deleteTask() {
    this.delete.emit();
  }
}
