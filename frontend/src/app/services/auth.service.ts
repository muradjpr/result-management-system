import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs'
import {tap} from 'rxjs/operators'
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URI = 'http://localhost:3000/users'
  private authState$ = new BehaviorSubject<boolean>(false)

  private user: User = {
    id : -1,
    name : '',
    email: '',
    password: ''

  }
  private user$ = new BehaviorSubject<User>(this.user)

  constructor(private http: HttpClient) { }


  getauthState() {
    return this.authState$.asObservable()
  }
  getUser() {
    return this.user$.asObservable()
  }

  login(email: any, password: any) {
    return this.http.post<any>(`${this.URI}/login`, {email, password}, {withCredentials: true})
      .pipe(
        tap((value) => {
          if(value.success) {
            this.authState$.next(true)
            this.user$.next(value.user)
          } else {
            this.authState$.next(false) 
          }
          
        })
      )
  }
}
