import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';
import { Page } from '../interfaces/Page';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpClient = inject(HttpClient);
  private baseUrl : string = 'https://peticiones.online/api/users';

  constructor() { }

  getUsers(page: number = 0, perPage: number = 10): Observable<Page> {
    return this.httpClient.get<Page>(`${this.baseUrl}?page=${page}&perPage=${perPage}`);
  }

  getById(_id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${_id}`);
  }

  newUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, user);
  }

  updateUser(_id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseUrl}/${_id}`, user);
  }

  deleteUser(_id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${_id}`);
  }

}





