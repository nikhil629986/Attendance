import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditComponent } from './components/edit/edit.component';
import { MarkAttendanceComponent } from './components/mark-attendance/mark-attendance.component';
import { AttenDashboardComponent } from './components/atten-dashboard/atten-dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';

const routes: Routes = [
  {
    path:"",
    component: DashBoardComponent
  },
  {
    path:"addStudent",
    component: AddStudentComponent
  },{
    path:"edit/:id",
    component: EditComponent
  },
  {
    path:"markattendance",
    component: MarkAttendanceComponent
  },{
    path:"Viewattendance/:id",
    component:AttenDashboardComponent
  },
  {
    path:"charts",
    component:ChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
