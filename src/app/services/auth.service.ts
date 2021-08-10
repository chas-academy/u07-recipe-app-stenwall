import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  // User registration
  register(user: User): Observable<any> {
    return this.http.post('http://u08-recipe-api.test/api/auth/register', user);
  }

  // Login
  signin(user: User): Observable<User> {
    return this.http.post<any>('http://u08-recipe-api.test/api/auth/login', user);
  }

  // logout
  logout(): Observable<any> {
    return this.http.post('http://u08-recipe-api.test/api/auth/logout', '');
  }

  // Access user profile
  profileUser(): Observable<User> {
    return this.http.get<User>('http://u08-recipe-api.test/api/auth/user-profile');
  }

}
