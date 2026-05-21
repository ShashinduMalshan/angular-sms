import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-container">
      <!-- Sidebar Navigation -->
      <aside class="sidebar">
        <div class="logo">EduManager</div>
        <nav>
          <a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">Dashboard</a>
          <a routerLink="/students" routerLinkActive="active-link">Students</a>
          <a routerLink="/courses" routerLinkActive="active-link">Courses</a>
        </nav>
      </aside>

      <!-- Main Content Area -->
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container { display: flex; height: 100vh; }
    .sidebar { width: 250px; background: #2c3e50; color: white; display: flex; flex-direction: column; }
    .logo { padding: 20px; font-size: 1.5rem; font-weight: bold; background: #1a252f; text-align: center; }
    nav { display: flex; flex-direction: column; padding: 10px; }
    nav a { padding: 15px; color: #bdc3c7; text-decoration: none; border-radius: 5px; margin-bottom: 5px; }
    nav a:hover { background: #34495e; color: white; }
    .active-link { background: #3498db !important; color: white !important; }
    .content { flex: 1; overflow-y: auto; background: #f4f7f6; padding: 30px; }
  `]
})
export class AppComponent {}
