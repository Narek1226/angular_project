import { Injectable } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_PATH = environment.endpoints.campusAdminApi;
  private USER_API_PATH = 'api/admin/node';

  constructor(private http: HttpClient) { }

  getAll(): Observable<object> {
    return this.http.get(`${this.API_PATH}/${this.USER_API_PATH}`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.API_PATH}/${this.USER_API_PATH}/${id}`);
  }

  saveUser(user: UserInterface): void {
    this.http.post(this.USER_API_PATH, user).subscribe(res => console.log(res));
  }

  changeUser(user: UserInterface): Observable<object> {
    return this.http.put(`${this.API_PATH}/${this.USER_API_PATH}/${user.id}`, user);
  }

  deleteUser(id: number): void {
    this.http.delete(`${this.API_PATH}/${this.USER_API_PATH}/${id}`);
  }
}
