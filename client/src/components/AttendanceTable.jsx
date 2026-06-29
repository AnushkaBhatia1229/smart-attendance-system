import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function AttendanceTable({ attendanceData }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        overflowX: "auto",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#1e293b",
        }}
      >
        Attendance Records
      </h2>

      <table
        style={{
          width: "100%",
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
            <th style={thStyle}>Student Name</th>
            <th style={thStyle}>Roll No</th>
            <th style={thStyle}>Department</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>

        <tbody>
          {attendanceData.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: "center",
                  padding: "30px",
                  color: "#64748b",
                }}
              >
                No Attendance Records Found
              </td>
            </tr>
          ) : (
            attendanceData.map((record) => (
              <tr
                key={record._id}
                style={{
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <td style={tdStyle}>{record.student?.name}</td>

                <td style={tdStyle}>{record.student?.rollNumber}</td>

                <td style={tdStyle}>{record.student?.department}</td>

                <td style={tdStyle}>
                  {new Date(record.date).toLocaleDateString()}
                </td>

                <td style={tdStyle}>
                  {record.status === "Present" ? (
                    <span
                      style={{
                        background: "#dcfce7",
                        color: "#15803d",
                        padding: "8px 15px",
                        borderRadius: "20px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: "600",
                      }}
                    >
                      <FaCheckCircle />
                      Present
                    </span>
                  ) : (
                    <span
                      style={{
                        background: "#fee2e2",
                        color: "#dc2626",
                        padding: "8px 15px",
                        borderRadius: "20px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: "600",
                      }}
                    >
                      <FaTimesCircle />
                      Absent
                    </span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "15px",
  textAlign: "center",
};

const tdStyle = {
  padding: "15px",
  textAlign: "center",
};

export default AttendanceTable;