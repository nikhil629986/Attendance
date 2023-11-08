import { Component } from '@angular/core';
import { StudentdetailService } from 'src/app/Service/studentdetail.service';
import { dashboard } from 'src/app/Models/dashboard';
import { Chart, LinearScale } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  public chart!: Chart;
  student: dashboard[] = [];

  constructor(private studentService: StudentdetailService) {}
  
  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAllStudentsFromAPI().subscribe((students) => {
      const labels = [];
      const map = new Map();
      const data = [];

      students.forEach((student) => {
        student.attendance?.forEach(({ date, status }) => {
          console.log(status);
          if (status == "Present") {
            if (map.get(date)) map.set(date, map.get(date) + 1);
            else map.set(date, 1);
          } else if (!map.get(date)) map.set(date, 0);
        });
      });

      console.log(map);

      for (let [key, value] of map) {
        labels.push(key);
        data.push(value);
      }

      this.createChart(labels.map((date: Date) => date.toString()), data);
    });
  }

  createChart(labels: string[], data: number[]) {
    const config = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'No. of student present',
            data: data,
            backgroundColor: [
              'red',
              'blue',
              'lightseagreen',
              'purple'
            ],
            borderColor: [
              'pink',
              'yellow',
              'orange',
              'blue'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          x: {
            color: 'white' 
          },
          y: {
            type: 'linear',
            beginAtZero: true,
            color: 'white' 
          }
        } as Chart.ChartDataSets
      }
    };

    this.chart = new Chart('myChart', config);
  }
}