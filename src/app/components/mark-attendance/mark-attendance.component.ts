import { Component } from '@angular/core';
import { dashboard } from '../../Models/dashboard';
import { StudentdetailService } from '../../Service/studentdetail.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert';
@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss'],
})
export class MarkAttendanceComponent {
  markattendanceForm!: FormGroup;

  students: dashboard[] = [];
  constructor(
    private studentdetailService: StudentdetailService,
    private fb: FormBuilder
  ) {
    this.markattendanceForm = this.fb.group({
      studentId: '',
      date: '',
      status: '',
    });
    console.log(this.markattendanceForm.value);
  }
  ngOnInit() {
    this.studentdetailService.getAllStudentsFromAPI().subscribe((data) => {
      this.students = data;
      console.log(this.students);
    });
  }
  MarkAttendance() {
    const studentId = this.markattendanceForm.get('studentId')?.value;
    const date = this.markattendanceForm.get('date')?.value;
    const status = this.markattendanceForm.get('status')?.value;
    
    const student = this.students.find((s) => s.id === studentId);
    if (student) {
      if(!student.attendance) student.attendance=[];
      student.attendance.push({ date, status });
      this.studentdetailService.updateStudent(student).subscribe(
        (data: any) => {
          swal('Success!', 'Attendance Marked Successfully', 'success');
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }


}
