import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div
      style={{
        height: "80px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 35px",
        boxShadow: "0 4px 15px rgba(0,0,0,.08)",
      }}
    >
      {/* Left Side */}
      <div>
        <h2
          style={{
            color: "#1e293b",
            marginBottom: "5px",
          }}
        >
          Smart Attendance Dashboard
        </h2>

        <p
          style={{
            color: "#64748b",
            fontSize: "14px",
          }}
        >
          Welcome Back 👋
        </p>
      </div>

      {/* Right Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Search */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f1f5f9",
            padding: "10px 15px",
            borderRadius: "12px",
            width: "260px",
          }}
        >
          <FaSearch
            style={{
              color: "#64748b",
            }}
          />

          <input
            type="text"
            placeholder="Search..."
            style={{
              border: "none",
              background: "transparent",
              marginLeft: "10px",
              width: "100%",
              fontSize: "15px",
            }}
          />
        </div>

        {/* Notification */}

        <div
          style={{
            width: "45px",
            height: "45px",
            background: "#eef2ff",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <FaBell
            style={{
              color: "#2563eb",
              fontSize: "18px",
            }}
          />
        </div>

        {/* User */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FaUserCircle
            style={{
              fontSize: "42px",
              color: "#2563eb",
            }}
          />

          <div>
            <h4
              style={{
                color: "#1e293b",
              }}
            >
              Admin
            </h4>

            <p
              style={{
                color: "#64748b",
                fontSize: "13px",
              }}
            >
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;