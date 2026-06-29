import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaEnvelope,
  FaLock,
  FaUserFriends,
  FaChalkboardTeacher,
  FaClipboardCheck,
} from "react-icons/fa";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter Email & Password");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      {/* LEFT PANEL */}

      <div className="left-panel">

        <div className="logo-box">
          <FaUserGraduate />
        </div>

        <h1>
          Smart
          <br />
          Attendance
        </h1>

        <div className="line"></div>

        <p>
          Manage Students, Teachers and Attendance
          from one powerful dashboard.
        </p>

        <div className="feature-container">

          <div className="feature-card">

            <div className="feature-icon student">
              <FaUserFriends />
            </div>

            <h3>Students</h3>

            <span>Management</span>

          </div>

          <div className="feature-card">

            <div className="feature-icon teacher">
              <FaChalkboardTeacher />
            </div>

            <h3>Teachers</h3>

            <span>Management</span>

          </div>

          <div className="feature-card">

            <div className="feature-icon attendance">
              <FaClipboardCheck />
            </div>

            <h3>Attendance</h3>

            <span>Tracking</span>

          </div>

        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="right-panel">

        <div className="login-card">

          <div className="lock-circle">
            🔒
          </div>

          <h2>
            Welcome Back 👋
          </h2>

          <p>
            Login to continue
          </p>

          <form onSubmit={handleLogin}>

            <div className="input-group">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            <div className="input-group">

              <FaLock className="input-icon" />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            <div className="login-options">

              <label>

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />

                Remember Me

              </label>

              <a href="/">Forgot Password?</a>

            </div>

            <button type="submit">
              Login
            </button>

          </form>

          <div className="bottom-text">

            Don't have an account?

            <span> Contact Admin</span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;