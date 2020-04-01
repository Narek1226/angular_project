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

  public heroes: Array<UserInterface> = [];

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((res: Array<UserInterface>) => {
      this.heroes = res;
    });
  }

  showUser(id: number): void {
    if (id) {
      this.router.navigate([`/public/detail/${id}`]);
    }
  }
}
