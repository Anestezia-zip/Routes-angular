import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
  public userName: string;
  public taskList: { name: string, status: boolean, done: string }[];
  public count = 3;

  public modal = false;
  public modalName!: string;
  public editStatus = false;
  public editIndex!: number;

  constructor() {
    this.userName = ''
    this.taskList = [
      { name: 'HTML', status: false, done: 'In PROGRESS' },
      { name: 'Angular', status: false, done: 'In PROGRESS' },
      { name: 'Javascript', status: false, done: 'In PROGRESS' },
    ];
  }

  addTasks(): void {
    const task = { name: this.userName, status: false, done: 'In PROGRESS'};
    this.taskList.push(task);
    this.userName = '';
    this.count++
  }

  onCheckboxChange(event: any, task: { name: string, status: boolean, done: string }) {
    task.status = event.target.checked; 
    task.done = task.status ? "Done" : "In PROGRESS";
  }
  
  deleteNames(index: number): void {
    this.taskList.splice(index, 1);
    this.count--
  }

  editNames(index: number): void {
    console.log(this.taskList[index].name);
    this.modal = true;
    this.modalName = this.taskList[index].name
    this.editIndex = index;
    this.editStatus = true;
  }

  saveNames(): void {
    this.taskList[this.editIndex].name = this.modalName
    this.modalName = '' 
    this.modal = false;
    this.editStatus = false;
  }
}

export interface Task {
  name: string;
  status: string;
  done: string;
}