import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})

export class AuthStateService {

  private userState = new BehaviorSubject<boolean>(this.tokenService.isLoggedIn());
  userAuthState = this.userState.asObservable();

  constructor(
    public tokenService: TokenService
  ) { }

  setAuthState(value: boolean) {
    this.userState.next(value);
  }
  
}
