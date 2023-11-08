import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import {MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import{MatIconModule} from'@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EditComponent } from './edit/edit.component';
import { AttenDashboardComponent } from './atten-dashboard/atten-dashboard.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DashBoardComponent,
    LayoutComponent,
    AddStudentComponent,
    EditComponent,
    AttenDashboardComponent,
    ChartsComponent,

  
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    DashBoardComponent,
    LayoutComponent,
    AddStudentComponent
  ]
})
export class ComponentsModule { }
