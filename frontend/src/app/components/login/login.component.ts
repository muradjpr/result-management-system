
import { HttpErrorResponse } from '@angular/common/http';
import { Component , OnInit, OnChanges} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: any;
  headerText = 'Login'
  constructor(private fb: FormBuilder, private authService: AuthService
    , private router: Router) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get email() { 
    return this.userForm.get('email'); 
  }

  get password() { 
    return this.userForm.get('password'); 
  }



  onSubmit() {
    if(!this.userForm.valid) {
      return;
    }
    const email = this.userForm.value.email;
    const password = this.userForm.value.password;
    this.authService.login(email, password).subscribe({
      next: (res) => {
        if(res) {
          setTimeout( () => {
            this.userForm.reset()
            this.router.navigateByUrl('/home').then()
          }, 1500)
        } else {
          console.log('nooo');
          
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error.message);
        
      }
    })
    
  }


}
