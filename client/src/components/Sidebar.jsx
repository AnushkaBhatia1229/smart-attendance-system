import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Students",
      path: "/students",
      icon: <FaUserGraduate />,
    },
    {
      name: "Teachers",
      path: "/teachers",
      icon: <FaChalkboardTeacher />,
    },
    {
      name: "Attendance",
      path: "/attendance",
      icon: <FaClipboardList />,
    },
  ];

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    // Remove Login Session
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to Login Page
    navigate("/", { replace: true });

    // Force Refresh
    window.location.reload();
  };

  return (
    <div
      style={{
        width: "270px",
        minHeight: "100vh",
        background: "#0f172a",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
      }}
    >
      {/* Logo */}
      <div>
        <div
          style={{
            padding: "30px 20px",
            textAlign: "center",
            borderBottom: "1px solid rgba(255,255,255,.1)",
          }}
        >
          <h2
            style={{
              color: "#60a5fa",
              fontSize: "28px",
            }}
          >
            Smart Attendance
          </h2>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
              fontSize: "14px",
            }}
          >
            Management System
          </p>
        </div>

        {/* Menu */}
        <div style={{ padding: "20px" }}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                padding: "15px",
                marginBottom: "12px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "600",
                color:
                  location.pathname === item.path
                    ? "#fff"
                    : "#cbd5e1",
                background:
                  location.pathname === item.path
                    ? "#2563eb"
                    : "transparent",
              }}
            >
              <span style={{ fontSize: "20px" }}>
                {item.icon}
              </span>

              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div
        style={{
          padding: "20px",
          borderTop: "1px solid rgba(255,255,255,.1)",
        }}
      >
        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            padding: "15px",
            background: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#dc2626";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#ef4444";
          }}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;