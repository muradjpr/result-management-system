import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'backend';

  constructor( private router: Router) {
  }

  ngOnInit() {
    const token = localStorage.getItem('access_token')
    if (!token) {
      this.router.navigateByUrl('/login').then()

    }

  }


}
