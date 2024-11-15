// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AddTaskComponent } from './add-task/add-task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, AddTaskComponent, TaskItemComponent, TaskListComponent],
  providers: [TaskService],
  bootstrap: [],
  exports: [
    TaskListComponent,
    AddTaskComponent
  ]
})
export class AppModule {}
