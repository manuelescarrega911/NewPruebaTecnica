import { Component, OnInit } from '@angular/core';
import { TaskServices } from './local-store.service';
import { AggTask } from './task-add.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'newTodolist';

  constructor(private TaskServices: TaskServices){}

  public DateNow : string = '';  
  public NewDateNow : Date;  


  NameTask : string = "";
  EditTaskValue : string = "";
  public Tasks : AggTask[] = []
  public FinishedTasks : AggTask[] = []
  UpdateTask = new AggTask(this.EditTaskValue, this.DateNow);

  ngOnInit() {
    this.NewDateNow = new Date(new Date().getTime())
    this.DateNow = this.NewDateNow.toString();
    this.GetsTasks();
  }
  
  TaskAdd() {
    if(this.NameTask){
      const NewTask = new AggTask(this.NameTask, this.DateNow);
      NewTask.TaskComplete = false;
      this.Tasks.push(NewTask);
      this.TaskServices.SaveTask(this.Tasks);
      this.GetsTasks();
      this.NameTask = "";

    }else{
      alert('Agregar Una Tarea');
    }
  }

  FinishTask(num : number) {
    const item = this.Tasks.splice(num,1);
    this.FinishedTasks.push(item[0]);
    this.TaskServices.SaveTask(this.Tasks);
    this.NameTask = "";

  }

  DeleteTaskFinished(indice: number) {
    this.FinishedTasks.splice(indice, 1);
    this.TaskServices.SaveTask(this.FinishedTasks);
    this.NameTask = "";

  }

  EditTask(){
    this.UpdateTask.NameTask = this.EditTaskValue;
    this.TaskServices.SaveTask(this.Tasks);
  }

  Uptask(EdithNewTask : AggTask){
    this.UpdateTask = EdithNewTask;
    this.EditTaskValue = EdithNewTask.NameTask;
    this.TaskServices.SaveTask(this.Tasks);
  }

  DeleteTask(indice: number) {
    this.Tasks.splice(indice, 1);
    this.TaskServices.SaveTask(this.Tasks);
    this.NameTask = "";

  }

  GetsTasks() {
    this.Tasks = this.TaskServices.GetTask();
  }

}
