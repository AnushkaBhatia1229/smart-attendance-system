import { FaEdit, FaTrash } from "react-icons/fa";

function TeacherTable({ teachers, onEdit, onDelete }) {
  return (
    <div
      style={{
        background: "#fff",
        marginTop: "30px",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        overflowX: "auto",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Teacher List
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
            <th style={th}>Name</th>
            <th style={th}>Email</th>
            <th style={th}>Subject</th>
            <th style={th}>Department</th>
            <th style={th}>Experience</th>
            <th style={th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {teachers.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                style={{
                  textAlign: "center",
                  padding: "30px",
                }}
              >
                No Teachers Found
              </td>
            </tr>
          ) : (
            teachers.map((teacher) => (
              <tr key={teacher._id}>
                <td style={td}>{teacher.name}</td>
                <td style={td}>{teacher.email}</td>
                <td style={td}>{teacher.subject}</td>
                <td style={td}>{teacher.department}</td>
                <td style={td}>{teacher.experience} Years</td>

                <td style={td}>
                  <button
                    onClick={() => onEdit(teacher)}
                    style={{
                      background: "#16a34a",
                      color: "#fff",
                      border: "none",
                      padding: "10px",
                      borderRadius: "8px",
                      marginRight: "10px",
                    }}
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => onDelete(teacher._id)}
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      padding: "10px",
                      borderRadius: "8px",
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

const th = {
  padding: "15px",
  textAlign: "center",
};

const td = {
  padding: "15px",
  textAlign: "center",
  borderBottom: "1px solid #e5e7eb",
};

export default TeacherTable;