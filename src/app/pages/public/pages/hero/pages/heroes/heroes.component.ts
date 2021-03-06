import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/entities/interfaces/user.interface';
import { UserService  } from 'src/app/providers/services/user/user.service';
import { Router } from '@angular/router';
import { HeroesRoutingPath } from '../../entities/Classes/heroes-routing-path';

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
      this.router.navigate([HeroesRoutingPath.HERO_DETAIL_ROUT_PATH.replace('{{id}}', `${id}`)]);
    }
  }
}
