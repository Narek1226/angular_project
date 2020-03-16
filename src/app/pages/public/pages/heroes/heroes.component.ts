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
    this.userService.getAll().subscribe((res: Array<UserInterface>) => {
      this.users = res;
    });
  }

  showUser(id) {
    if (id) {
      this.router.navigate([`/public/detail/${id}`]);
    }
  }
}
