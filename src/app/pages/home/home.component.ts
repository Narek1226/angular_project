import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user/user.service';
import {AuthService} from '../../services/auth/auth.service';
import { User } from 'oidc-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: Array<UserInterface>;

  constructor(private userService: UserService, public authService: AuthService) { }

  ngOnInit() {
    this.users = this.userService.getAll();

    this.authService.getUser()
      .then((user: User) => {
        console.log(user);
      })
      .catch((error: Error) => console.error(error));
  }
}
