import { Component, OnInit } from '@angular/core';
import {UserInterface} from '../../../../interfaces/user.interface';
import {UserService} from '../../../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: Array<UserInterface>;
  currentUserId: number;
  myHeroTitle: string;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.userService.getAll();
  }

  selectUser(id: number) {
    this.currentUserId = id;
    this.changeMyHeroTitle();
  }

  changeMyHeroTitle() {
    const userName = this.userService.getUserById(this.currentUserId).name;
    this.myHeroTitle = `My Hero is ${userName}`;
  }

  deleteCurrentUser() {
    if (this.currentUserId) {
      this.userService.deleteUser(this.currentUserId);
      this.getUsers();
    } else {
      alert('Select User');
    }
  }

  showCurrentUser() {
    if (this.currentUserId) {
      const path = `/public/detail/${this.currentUserId}`;

      this.router.navigate([path]);
    } else {
      alert('Select User');
    }
  }
}
