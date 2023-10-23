import { Injectable } from '@angular/core';
import { AggTask } from './task-add.service';

@Injectable({
  providedIn: 'root'
})
export class TaskServices {
  CLAVE_LOCAL_STORAGE = "TaskInAngular"

  constructor() { }

  GetTask(): AggTask[] {
    return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || "[]")
  }
  SaveTask(tareas: AggTask[]) {
    localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(tareas))
  }


}