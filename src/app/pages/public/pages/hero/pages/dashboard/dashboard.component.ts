import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../../../../../entities/interfaces/user.interface';
import { UserService } from '../../../../../../providers/services/user/user.service';
import { Router } from '@angular/router';
import { HeroesRoutingPath } from '../../entities/Classes/heroes-routing-path';

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

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAll()
      .subscribe((res: Array<UserInterface>) => {
       this.heroes = res;
      });
  }

  selectUser(id: number): void {
    this.currentUserId = id;
    this.changeMyHeroTitle();
  }

  changeMyHeroTitle(): void {
    this.userService.getUserById(this.currentUserId).subscribe((user) => {
      this.myHeroTitle = `My Hero is ${user.title}`;
    });
  }

  deleteCurrentUser(): void {
    if (this.currentUserId) {
      this.userService.deleteUser(this.currentUserId)
        .subscribe(() => {
          this.getUsers();
        });
    } else {
      alert('Select User');
    }
  }

  showCurrentUser(): void {
    if (this.currentUserId) {
      this.router.navigate([HeroesRoutingPath.HERO_DETAIL_ROUT_PATH.replace('{{id}}', `${this.currentUserId}`)]);
    } else {
      alert('Select User');
    }
  }
}
