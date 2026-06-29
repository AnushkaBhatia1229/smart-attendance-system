import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Attendance from "./pages/Attendance";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login />
            )
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Students */}
        <Route
          path="/students"
          element={
            isLoggedIn ? (
              <Students />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Teachers */}
        <Route
          path="/teachers"
          element={
            isLoggedIn ? (
              <Teachers />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Attendance */}
        <Route
          path="/attendance"
          element={
            isLoggedIn ? (
              <Attendance />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;