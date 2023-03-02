import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit, AfterViewInit{


  constructor(private  authService: AuthService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

}
