import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  private issuer: object;
  private u08ApiUrl: string;

  constructor() {
    this.u08ApiUrl = environment.U08_API_URL;

    this.issuer = {
      login: `${this.u08ApiUrl}/api/auth/login`,
      register: `${this.u08ApiUrl}/guest/auth/register`
    }
  }

  handleData(token): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): any {
    return localStorage.getItem('auth_token');
  }

  isValidToken(): boolean {
     const token = this.getToken();

     if(token){
       const payload = this.payload(token);
       if(payload){
         return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
       }
     } else {
        return false;
     }
  }

  payload(token): any {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  // user state based on valid token
  isLoggedIn(): any {
    return this.isValidToken();
  }

  // remove token
  removeToken(): void {
    localStorage.removeItem('auth_token');
  }
}
