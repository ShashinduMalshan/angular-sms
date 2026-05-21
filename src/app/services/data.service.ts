import { Injectable, signal, effect } from '@angular/core';
import { Student } from '../models/student.model';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  // Load initial data from LocalStorage
  students = signal<Student[]>(JSON.parse(localStorage.getItem('students') || '[]'));
  courses = signal<Course[]>(JSON.parse(localStorage.getItem('courses') || '[]'));

  constructor() {
    // Automatically save to storage whenever a signal changes
    effect(() => localStorage.setItem('students', JSON.stringify(this.students())));
    effect(() => localStorage.setItem('courses', JSON.stringify(this.courses())));
  }

  // Student Actions
  addStudent(name: string, email: string) {
    this.students.update(s => [...s, { id: Date.now(), name, email }]);
  }

  deleteStudent(id: number) {
    this.students.update(s => s.filter(std => std.id !== id));
  }

  // Course Actions
  addCourse(title: string, duration: string) {
    this.courses.update(c => [...c, { id: Date.now(), title, duration }]);
  }

  deleteCourse(id: number) {
    this.courses.update(c => c.filter(crs => crs.id !== id));
  }
}
