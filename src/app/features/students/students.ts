import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Student Management</h2>
    <div class="input-panel">
      <input [(ngModel)]="name" placeholder="Name">
      <input [(ngModel)]="email" placeholder="Email">
      <button (click)="save()">Add Student</button>
    </div>

    <table class="data-table">
      <thead><tr><th>Name</th><th>Email</th><th>Actions</th></tr></thead>
      <tbody>
        @for (s of data.students(); track s.id) {
          <tr>
            <td>{{ s.name }}</td>
            <td>{{ s.email }}</td>
            <td><button class="delete-btn" (click)="data.deleteStudent(s.id)">Delete</button></td>
          </tr>
        } @empty { <tr><td colspan="3">No students found.</td></tr> }
      </tbody>
    </table>
  `
})
export class StudentsComponent {
  data = inject(DataService);
  name = ''; email = '';
  save() { if(this.name && this.email) { this.data.addStudent(this.name, this.email); this.name = ''; this.email = ''; } }
}
