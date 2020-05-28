import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UserService } from '../../../../../../providers/services/user/user.service';
import { Observable } from 'rxjs';
import { UserInterface } from '../../../../../../entities/interfaces/user.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroDetailResolver implements Resolve<UserInterface> {
  constructor(private heroService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<UserInterface>|Promise<UserInterface>|UserInterface {
    return this.heroService.getUserById(+route.paramMap.get('id'));
  }
}
