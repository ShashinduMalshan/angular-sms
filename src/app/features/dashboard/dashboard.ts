import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h1>Dashboard Overview</h1>
    <div class="stats-grid">
      <div class="card">
        <h3>Students</h3>
        <p class="count">{{ data.students().length }}</p>
      </div>
      <div class="card">
        <h3>Courses</h3>
        <p class="count">{{ data.courses().length }}</p>
      </div>
    </div>
  `,
  styles: [`
    .stats-grid { display: flex; gap: 20px; }
    .card { background: white; padding: 2rem; border-radius: 12px; flex: 1; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center; }
    .count { font-size: 2.5rem; color: #3498db; font-weight: bold; }
  `]
})
export class DashboardComponent {
  data = inject(DataService);
}
