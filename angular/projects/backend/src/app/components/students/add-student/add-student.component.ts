import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{

  studentForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: [],
      roll: [],
      fathername: [],
      phone: [],
      gender: [],
      courses: [],
    })
  }

  onaddstudent() {
    console.log(this.studentForm.value)
  }

}
