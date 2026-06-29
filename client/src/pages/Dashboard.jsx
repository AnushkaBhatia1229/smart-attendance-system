import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaBook,
} from "react-icons/fa";

function Dashboard() {
  const cards = [
    {
      title: "Total Students",
      value: "120",
      icon: <FaUserGraduate />,
      color: "#2563eb",
    },
    {
      title: "Total Teachers",
      value: "18",
      icon: <FaChalkboardTeacher />,
      color: "#16a34a",
    },
    {
      title: "Attendance %",
      value: "94%",
      icon: <FaClipboardCheck />,
      color: "#f59e0b",
    },
    {
      title: "Classes",
      value: "12",
      icon: <FaBook />,
      color: "#9333ea",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          minHeight: "100vh",
          background: "#eef3fb",
        }}
      >
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h1
            style={{
              marginBottom: "30px",
              color: "#1e293b",
            }}
          >
            Dashboard
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  padding: "25px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                }}
              >
                <div>
                  <h3
                    style={{
                      color: "#64748b",
                      marginBottom: "12px",
                    }}
                  >
                    {card.title}
                  </h3>

                  <h1>{card.value}</h1>
                </div>

                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: card.color,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "30px",
                  }}
                >
                  {card.icon}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "40px",
              background: "#fff",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <h2>Welcome 👋</h2>

            <p
              style={{
                marginTop: "10px",
                color: "#64748b",
                lineHeight: "28px",
              }}
            >
              Welcome to Smart Attendance Management System.
              Manage students, teachers and attendance
              efficiently from one modern dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;