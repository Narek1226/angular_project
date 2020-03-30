import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../../../interfaces/user.interface';
import { UserService } from '../../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Array<UserInterface>;
  currentUserId: number;
  myHeroTitle: string;

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll()
      .subscribe((res: Array<UserInterface>) => {
       this.heroes = res;
      });
  }

  selectUser(id: number) {
    this.currentUserId = id;
    this.changeMyHeroTitle();
  }

  changeMyHeroTitle() {
    this.userService.getUserById(this.currentUserId).subscribe((user) => {
      this.myHeroTitle = `My Hero is ${user.title}`;
    });
  }

  deleteCurrentUser() {
    if (this.currentUserId) {
      this.userService.deleteUser(this.currentUserId)
        .subscribe(() => {
          this.getUsers();
        });
    } else {
      alert('Select User');
    }
  }

  showCurrentUser() {
    if (this.currentUserId) {
      this.router.navigate([`/public/detail/${this.currentUserId}`]);
    } else {
      alert('Select User');
    }
  }
}
