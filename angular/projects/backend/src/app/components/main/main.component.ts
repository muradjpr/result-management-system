import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.currentUser.subscribe(
      {
        next: value => console.log(value)
      }
    )
  }

  logout() {

    this.authService.logout()
  }

}
