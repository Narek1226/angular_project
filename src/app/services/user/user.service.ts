import { Injectable } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private users: Array<UserInterface> = [
    {
      id: Date.now(),
      title: 'Hero 1'
    },
    {
      id: Date.now(),
      title: 'Hero 2'
    },
  ]

  getAll(): Array<UserInterface> {
    return this.users;
  }

  getUserById(id): UserInterface {
    return this.users.find((item) => id === item.id);
  }

  createUser(user): void {
    this.users.push(user);
  }

  deleteUser(id): void {
    this.users.filter((item) => item.id !== id);
  }
}