
import { Component , OnInit, OnChanges} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: any;
  headerText = 'Register'
  constructor(private fb: FormBuilder) {
    
  }
  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

 


  onSubmit() {
    console.log(this.userForm.value);
    
  }


}
