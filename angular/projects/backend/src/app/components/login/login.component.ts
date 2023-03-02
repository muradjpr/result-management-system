import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../Services/auth.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {StorageService} from "../../Services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private storageService: StorageService,
    private route: ActivatedRoute
    ) {

  }


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })



    const token = localStorage.getItem('access_token')
    if (!token) return;
    this.router.navigateByUrl('/dashboard').then()

  }


  onSubmit() {
    const val = this.loginForm.value

    this.authService.login(val.email, val.password).subscribe(
      res => {
        console.log(res)
        if(res.user.roles == 'Admin' && res.success) {
          this.storageService.saveUser(res.user)
          this.messageService.add({
            severity:'success',
            summary:'Service Message',
            detail:'Via MessageService'
          })
          setTimeout(() => {
            // get return url from query parameters or default to home page
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
            this.router.navigateByUrl(returnUrl).then();
          }, 1500)
        }


        else {
          this.messageService.add({
            severity:'warn',
            summary:'Service Message',
            detail:'you are not a teacher'
          })
        }

      },
      err => {
        console.log(err)
        this.messageService.add({
          severity:'error',
          summary:err.error.error,
          detail:err.error.message
        })
      }
    )

  }
}
