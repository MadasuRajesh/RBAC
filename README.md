# 🔐 Role-Based Access Control (RBAC) System

This project is a full-stack Role-Based Access Control (RBAC) system built with **ASP.NET Core Web API** and **Angular**. It provides authentication using JWT, role-based authorization (Admin, Editor, Viewer), and secure routing & UI based on user roles.

---

## 📁 Project Structure

### Backend (.NET Core API)
Located in `RBAC.Api/`

- **Controllers/** – Handles API endpoints
- **DTO/** – Data Transfer Objects
- **Models/** – EF Core models (e.g., ApplicationUser, Content)
- **Repositories/** – Generic Repository Pattern for data access
- **Services/** – Business logic (e.g., UserService, ContentService)
- **Interfaces/** – Abstractions for DI
- **Middlewares/** – Custom exception handling middleware
- **DbSeeder.cs** – Seeds default roles & admin user
- **Startup.cs / Program.cs** – App startup configuration

### Frontend (Angular)
Located in `rbac-client/`

- **auth/** – Login/Register with guards
- **users/** – User list & CRUD
- **content/** – Content list & CRUD (with card layout)
- **core/** – AuthService, route guards
- **shared/** – Models, enums, and utility logic
- **layout/** – Header, footer, layout components

---

## ⚙️ Getting Started

### Prerequisites
- [.NET 7 SDK](https://dotnet.microsoft.com/download)
- [Node.js (v18+)](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
- [SQL Server](https://www.microsoft.com/en-in/sql-server/sql-server-downloads)

---

### 🔧 Backend Setup

1. **Navigate to API folder:**
   ```bash
   cd WebApplication1/RBAC.Api
   ```

2. **Restore and run migrations:**
   ```bash
   dotnet restore
   dotnet ef database update
   ```

3. **Run the API:**
   ```bash
   dotnet run
   ```

> API runs at `https://localhost:44340`

---

### 🚀 Frontend Setup

1. **Navigate to Angular project:**
   ```bash
   cd rbac-client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run Angular app:**
   ```bash
   ng serve
   ```

> Angular app runs at `http://localhost:4200`

---

## 🔐 Default Admin Credentials

```bash
Username: admin
Password: Admin@123
```

> These credentials are seeded automatically via `DbSeeder.cs`

---

## 🧪 Features

- ✅ JWT Authentication
- ✅ Role-based authorization (`Admin`, `Editor`, `Viewer`)
- ✅ Protected routes using Angular Guards
- ✅ Role-based UI rendering (dynamic nav)
- ✅ CRUD operations for Users (Admin only)
- ✅ CRUD operations for Content (Admin, Editor)
- ✅ Card layout for content with responsive design
- ✅ Modular Angular architecture
- ✅ Global error handling (both .NET & Angular)
- ✅ Swagger API documentation

---

## 📌 Technologies Used

### Backend
- ASP.NET Core Web API
- Entity Framework Core
- Identity
- SQL Server
- Swagger

### Frontend
- Angular 17+
- RxJS, Reactive Forms
- Angular Routing & Guards
- SCSS

---

## 🔒 Role Permissions

| Role    | User Management | Content Management | View Content |
|---------|------------------|--------------------|--------------|
| Admin   | ✅ Full CRUD      | ✅ Full CRUD        | ✅            |
| Editor  | ❌               | ✅ Full CRUD        | ✅            |
| Viewer  | ❌               | ❌                  | ✅            |

---

## 🧩 To Do

- ✅ Add pagination for user & content lists
- ✅ Unit testing (backend & frontend)
- ⏳ Refresh token support
- ⏳ User profile update feature

---

## 📷 Screenshots

> Add your screenshots here if needed (e.g., login page, user list, content cards, etc.)

---

## 🤝 Contribution

Contributions are welcome! Feel free to fork and raise PRs.

---

## 📄 License

MIT License