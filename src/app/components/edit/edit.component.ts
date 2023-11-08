import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { dashboard } from 'src/app/Models/dashboard';
import { StudentdetailService } from 'src/app/Service/studentdetail.service';
import Swal from 'sweetalert';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  studentForm!: FormGroup;
  student!: dashboard;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentdetailService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.studentService.getStudent(id).subscribe((student) => {
        this.student = student;
       
        this.studentForm = this.fb.group({
          
          name: [ student.name, Validators.required],
          email: [student.email, Validators.required],
          phone: [student.phone, Validators.required]
        });
        console.log(this.studentForm)
      });
    });
  } 

  onUpdateStudent() {
    if (this.studentForm.valid) {
      const updatedStudent = this.studentForm.value;
      updatedStudent.id = this.student.id;
      this.studentService.updateStudent(updatedStudent).subscribe(() => {
        Swal('Success!', 'Student Has been Successfully Updated', 'success');
        
      });
    }
  }

}
