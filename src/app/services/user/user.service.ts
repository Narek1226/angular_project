import { Injectable } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private users: Array<UserInterface> = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  getAll(): Array<UserInterface> {
    return this.users;
  }

  getUserById(id): UserInterface {
    return this.users.find((item: UserInterface) => id === item.id);
  }

  saveUser(user: UserInterface): void {
    this.users.push(user);
  }

  changeUser(user: UserInterface): void {
    this.users = this.users.map((item: UserInterface) => {
      if (item.id === user.id) {
        return user;
      } else {
        return item;
      }
    });
  }

  deleteUser(id): void {
    this.users = this.users.filter((item: UserInterface) => item.id !== id);
  }

  getTopUsers(): Array<UserInterface> {
    return this.users.slice(0, 5);
  }
}
