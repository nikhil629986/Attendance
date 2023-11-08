import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { dashboard } from 'src/app/Models/dashboard';
import { StudentdetailService } from 'src/app/Service/studentdetail.service';
import{MatIcon} from'@angular/material/icon'

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name', 'Email','Phone', 'Action'];
  dataSource = new MatTableDataSource<dashboard>();
  isLoading = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private studentService: StudentdetailService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.isLoading = true;
    this.studentService.getAllStudentsFromAPI().subscribe((students) => {
      console.log(students)
      this.dataSource.data = students;
      this.dataSource.paginator = this.paginator;
        this.isLoading = false;
    });
  }

  onDelete(id:number){
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents(); // Reload the data after deleting a student
    });
  }
}