import {User, UserManager} from 'oidc-client';

import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userManager: UserManager;
  identityUser: User = null;

  constructor() {
    this.userManager = new UserManager({
      authority: environment.endpoints.identityServer,
      client_id: 'angular',
      redirect_uri: 'http://localhost:4200/assets/signin-callback.html',
      silent_redirect_uri: 'http://localhost:4200/assets/silent-callback.html',
      post_logout_redirect_uri: 'http://localhost:4200',
      response_type: 'id_token token',
      scope: 'openid campus_api'
    });
  }

  getUser(): Observable<User> {
    return from(this.userManager.getUser());
  }

  login(): Observable<void> {
    return from(this.userManager.signinRedirect());
  }

  renewToken(): Observable<User> {
    return from(this.userManager.signinSilent());
  }

  logout(): Observable<void> {
    localStorage.clear();
    return from(this.userManager.signoutRedirect());
  }
}
