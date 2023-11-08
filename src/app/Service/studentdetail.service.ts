import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dashboard } from '../Models/dashboard';
@Injectable({
  providedIn: 'root'
})
export class StudentdetailService {
  private readonly BASE_URL = 'https://654762ba902874dff3ac3a22.mockapi.io/';
  constructor(private http: HttpClient) {}

  createStudent(student: dashboard) {
    return this.http.post<{ name: string }>(`${this.BASE_URL}Dashboard`, student);
  }
  
  getAllStudentsFromAPI(): Observable<dashboard[]> {
    return this.http.get<dashboard[]>(`${this.BASE_URL}Dashboard`);
  }
  
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}Dashboard/${id}`);
  }
  
  getStudent(id: number): Observable<dashboard> {
    return this.http.get<dashboard>(`${this.BASE_URL}Dashboard/${id}`);
  }
  
  updateStudent(studentData: dashboard) {
    const apiUrl = `${this.BASE_URL}Dashboard/${studentData.id}`;
    return this.http.put(apiUrl, studentData);
  }
  
 }


