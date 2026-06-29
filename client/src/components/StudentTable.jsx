import { FaEdit, FaTrash } from "react-icons/fa";

function StudentTable({ students, onEdit, onDelete }) {
  return (
    <div
      style={{
        marginTop: "30px",
        background: "#fff",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        overflowX: "auto",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#1e293b" }}>
        Student List
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
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Roll No</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Department</th>
            <th style={thStyle}>Semester</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                style={{
                  textAlign: "center",
                  padding: "30px",
                }}
              >
                No Students Found
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <tr
                key={student._id}
                style={{
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <td style={tdStyle}>{student.name}</td>
                <td style={tdStyle}>{student.rollNumber}</td>
                <td style={tdStyle}>{student.email}</td>
                <td style={tdStyle}>{student.department}</td>
                <td style={tdStyle}>{student.semester}</td>

                <td style={tdStyle}>
                  <button
                    onClick={() => onEdit(student)}
                    style={{
                      background: "#16a34a",
                      border: "none",
                      color: "#fff",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => onDelete(student._id)}
                    style={{
                      background: "#dc2626",
                      border: "none",
                      color: "#fff",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <FaTrash />
                  </button>
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

export default StudentTable;