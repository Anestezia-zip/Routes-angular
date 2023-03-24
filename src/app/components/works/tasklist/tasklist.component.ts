import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})

export class TasklistComponent {
  public newName!: string;
  public newEmail!: string;
  public newPassword!: string;
  users: User[] = [];
  public editStatus = false;
  public editIndex!: number;

  addNames(): void {
    const newUser: User = { name: this.newName, login: this.newEmail, password: this.newPassword };
    this.users.push(newUser);
    this.newName = '' 
    this.newEmail = ''
    this.newPassword = ''
  }

  deleteNames(index: number): void {
    this.users.splice(index, 1);
  }

  editNames(index: number): void {
    this.newName = this.users[index].name;
    this.newEmail = this.users[index].login;
    this.newPassword = this.users[index].password;
    this.editIndex = index;
    this.editStatus = true;
  }

  saveNames(): void {
    this.users[this.editIndex].name = this.newName
    this.users[this.editIndex].login = this.newEmail
    this.users[this.editIndex].password = this.newPassword
    this.newName = '' 
    this.newEmail = ''
    this.newPassword = ''
    this.editStatus = false;
  }
}

export interface User {
  name: string;
  login: string;
  password: string;
}