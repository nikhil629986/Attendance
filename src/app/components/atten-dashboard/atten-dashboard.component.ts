import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dashboard } from 'src/app/Models/dashboard';
import { StudentdetailService } from 'src/app/Service/studentdetail.service';
@Component({
  selector: 'app-atten-dashboard',
  templateUrl: './atten-dashboard.component.html',
  styleUrls: ['./atten-dashboard.component.scss']
})
export class AttenDashboardComponent {
studentAtten:dashboard[]=[]
  constructor(private  studentdetailService: StudentdetailService,    private route: ActivatedRoute,)
  {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.studentdetailService.getStudent(id).subscribe((student) => {
        this.studentAtten.push(student)
    })
    console.log(this.studentAtten);


  })

}}
