import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserService  } from 'src/app/services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public users: Array<UserInterface> = [];

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.users = this.userService.getTopUsers();
  }

  showUser(id) {
    if (id) {
      const path = `/public/detail/${id}`;

      this.router.navigate([path]);
    }
  }
}
