# AppTracker – Telemetry and Monitoring Platform

AppTracker is a **React-based telemetry dashboard** that helps track, manage, and analyze application, user, and device activity.  
It provides a centralized system for monitoring beneficiaries, managing devices, and visualizing usage data.

[View live demo](https://app-statistics-pi.vercel.app/)

---

## 🚀 Features

- **Authentication**
  - Sign In, Sign Up, and Password Reset flows
  - Protected routes with role-based access (via `RequireAuth`)

- **Dashboard**
  - Centralized overview of system metrics
  - Quick access to beneficiaries, users, and devices

- **Beneficiary Management**
  - View and manage beneficiaries
  - Access beneficiary-specific details
  - Linked user and device management

- **User Management**
  - Create, edit, and track users
  - Reset user credentials
  - Analytics view (`UserAnalyticsCard`)

- **Device Management**
  - Add, edit, and monitor registered devices
  - Device detail pages
  - Link devices to beneficiaries

- **App Usage Tracking**
  - Track usage sessions
  - Analyze per-app statistics
  - View detailed app reports

- **Charts & Analytics**
  - Usage charts (hourly, daily)
  - Interactive analytics powered by Chart.js

- **Theming**
  - Multiple themes available (dark, blue, semi-dark, bordered)
  - Responsive SCSS and CSS styling

---

## 📂 Project Structure

```
src/
 ├── api/                 # Axios setup and API services
 ├── app/                 # Redux store configuration
 ├── assets/              # Images, fonts, CSS, plugins
 ├── components/          # Reusable UI components (charts, modals, nav, etc.)
 ├── context/             # Context providers
 ├── features/            # Redux slices (auth, devices, beneficiaries, etc.)
 ├── layouts/             # Shared layouts (Sidebar, Navbar, Footer)
 ├── pages/               # App pages (Dashboard, SignIn, DeviceManagement, etc.)
 ├── routes/              # Route guards (RequireAuth)
 ├── sass/                # Theme SCSS files
 ├── services/            # Business logic helpers
 ├── store/               # Global store slices
 ├── utils/               # Utilities (time formatting, loaders)
 ├── App.jsx              # Main app routing
 ├── main.jsx             # Entry point
```

---

## 🛠️ Tech Stack

- **Frontend:** React 18, React Router v6
- **State Management:** Redux Toolkit
- **Styling:** SCSS, CSS, responsive themes
- **Charts:** Chart.js
- **API:** Axios
- **Build Tool:** Vite

---

## 🔑 Authentication Flow

- `/signin` – login page  
- `/register` – create account  
- `/reset-password` – reset credentials  
- Protected routes are wrapped in `RequireAuth` (can be toggled on/off).

---

## 📊 Key Routes

- `/dashboard` – main dashboard  
- `/beneficiaries` – beneficiary list  
- `/beneficiaries/:id` – beneficiary details  
- `/users` – user management  
- `/device-management` – device list  
- `/devices/:id` – device details  
- `/apps` – apps usage  
- `/apps/:id` – app details  

---

## ⚡ Getting Started

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd apptracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

4. Run the app:

   ```bash
   npm run dev
   ```

5. Build for production:

   ```bash
   npm run build
   ```

---

## 📌 Future Enhancements

- Role-based authorization (admin, manager, user)
- Realtime telemetry (WebSocket or GraphQL subscriptions)
- Extended device health metrics
- Advanced analytics dashboards

---

## 📄 License

MIT License
