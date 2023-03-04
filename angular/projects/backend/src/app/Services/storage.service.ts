import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  currentUser!:any;

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe({
      next: (res) => {
        this.currentUser = res
      }
      }
    )
  }

  public saveUser(user:any) {
    window.sessionStorage.removeItem(this.currentUser)
    window.sessionStorage.setItem(this.currentUser, JSON.stringify(user))
  }


}
