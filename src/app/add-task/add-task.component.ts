// src/app/add-task/add-task.component.ts
import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: 'add-task-component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ]
})
export class AddTaskComponent {
  @Output() addTask = new EventEmitter<string>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.addTask.emit(this.taskForm.value.title);
      this.taskForm.reset();
    }
  }
}
