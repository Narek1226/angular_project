import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/providers/services/user/user.service';
import {AuthService} from '../../providers/services/auth/auth.service';
import { User } from 'oidc-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService, public authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser()
      .subscribe((user: User) => {
        if (user) {
          localStorage.setItem('session_state', user.session_state);
          localStorage.setItem('access_token', user.access_token);
          localStorage.setItem('refresh_token', user.refresh_token);
        }
        }, (error: Error) => console.error(error));
  }
}
