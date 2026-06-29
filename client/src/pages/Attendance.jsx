import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Attendance() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAttendance = (id, status) => {
    setAttendance({
      ...attendance,
      [id]: status,
    });
  };

  const saveAttendance = async () => {
    try {
      const records = students.map((student) => ({
        student: student._id,
        status: attendance[student._id] || "Absent",
        date,
      }));

      await API.post("/attendance", {
        records,
      });

      alert("Attendance Saved Successfully");
    } catch (err) {
      console.log(err);
      alert("Failed to Save Attendance");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#eef3fb",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h1>Attendance Management</h1>

          <div
            style={{
              margin: "25px 0",
            }}
          >
            <label>Date</label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{
                marginLeft: "15px",
                padding: "10px",
              }}
            />
          </div>

          <table
            style={{
              width: "100%",
              background: "#fff",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#2563eb",
                  color: "#fff",
                }}
              >
                <th style={th}>Name</th>
                <th style={th}>Roll No</th>
                <th style={th}>Present</th>
                <th style={th}>Absent</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td style={td}>{student.name}</td>

                  <td style={td}>{student.rollNumber}</td>

                  <td style={td}>
                    <input
                      type="radio"
                      name={student._id}
                      onChange={() =>
                        handleAttendance(
                          student._id,
                          "Present"
                        )
                      }
                    />
                  </td>

                  <td style={td}>
                    <input
                      type="radio"
                      name={student._id}
                      defaultChecked
                      onChange={() =>
                        handleAttendance(
                          student._id,
                          "Absent"
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={saveAttendance}
            style={{
              width: "250px",
              marginTop: "30px",
            }}
          >
            Save Attendance
          </button>
        </div>
      </div>
    </div>
  );
}

const th = {
  padding: "15px",
};

const td = {
  padding: "15px",
  textAlign: "center",
  borderBottom: "1px solid #ddd",
};

export default Attendance;