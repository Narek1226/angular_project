import { User, UserManager } from 'oidc-client';

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

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

  getUser(): Promise<User> {
    return this.userManager.getUser();
  }

  login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  renewToken(): Promise<User> {
    return this.userManager.signinSilent();
  }

  logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }
}
