import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentdetailService } from 'src/app/Service/studentdetail.service';
import Swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private studentService: StudentdetailService, private router: Router) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, this.customValidator]],
      phone: ['', Validators.required]
    });
  }

  onAddStudent() {
    console.log(this.studentForm.value);
    this.studentService.createStudent(this.studentForm.value).subscribe((res) => {
      Swal('Success!', 'Student data has been saved successfully', 'success');
      this.router.navigate(['/']);
    });
  }

  customValidator(control: FormControl) {
    const value = control.value;
    if (!value || value.trim() === '') {
      return { required: true };
    }
    if (!(/^\S+@\S+\.\S+$/.test(value))) {
      return { email: true };
    }
    return null;
  }

  get name() {
    return this.studentForm.get('name');
  }

  get email() {
    return this.studentForm.get('email');
  }

  get phone() {
    return this.studentForm.get('phone');
  }

  get isFormInvalid() {
    return this.name?.hasError('required')
        || this.email?.hasError('required') || this.email?.hasError('email')
        || this.phone?.hasError('required');
  }
}