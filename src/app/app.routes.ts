import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard';
import { StudentsComponent } from './features/students/students';
import { CoursesComponent } from './features/courses/courses';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '**', redirectTo: '' }
];
