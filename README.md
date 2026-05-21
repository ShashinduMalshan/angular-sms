
# School Manager Dashboard

A modern, responsive Single Page Application (SPA) built with **Angular 18** to manage students and courses. This project demonstrates the use of Standalone Components, Signals for state management, and a clean Service-based architecture.

## 🚀 Features

- **Dynamic Dashboard**: Real-time statistics showing the total number of students and courses.
- **Student Management**: Full CRUD (Create, Read, Delete) functionality for student records.
- **Course Management**: Add and remove courses with ease.
- **Sidebar Navigation**: Persistent navigation for a professional user experience.
- **Data Persistence**: Uses `LocalStorage` to ensure data is saved even after page refreshes.
- **Modern Angular Control Flow**: Uses the new `@for` and `@if` syntax for better performance.

## 🛠️ Tech Stack

- **Framework**: Angular 18 (Standalone)
- **State Management**: Angular Signals
- **Styling**: Modern CSS (Flexbox/Grid)
- **Language**: TypeScript

## 📂 Folder Structure

```text
src/app/
  ├── models/      # Data Interfaces (Student, Course)
  ├── services/    # Logic & State (DataService with Signals)
  ├── pages/       # Main Views (Dashboard, Students, Courses)
  ├── app.routes.ts # Navigation Routing
  └── app.component # Main Shell with Sidebar
```

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   ng serve
   ```
   Open `http://localhost:4200/` in your browser.

## 📝 License
This project is for educational purposes.

