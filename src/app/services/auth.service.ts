import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private u08ApiUrl: string;

  constructor(private http: HttpClient) {
    this.u08ApiUrl = environment.U08_API_URL;
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  // User registration
  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.u08ApiUrl}/api/auth/register`, user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(`${this.u08ApiUrl}/api/auth/login`, user);
  }

  // logout
  logout(): Observable<any> {
    return this.http.post<any>(`${this.u08ApiUrl}/api/auth/logout`, '');
  }

  // Access user profile
  profileUser(): Observable<User> {
    return this.http.get<User>(`${this.u08ApiUrl}/api/auth/user-profile`);
  }

}
