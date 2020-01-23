import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onLogin() {
    this.authService.login().catch((error: Error) => console.error(error));
  }

  onRenewToken() {
    this.authService.renewToken()
      .then(user => {
        this.authService.identityUser = user;
      })
      .catch((error: Error) => console.error(error));
  }

  onLogout() {
    this.authService.logout().catch((error: Error) => console.error(error));
  }
}
