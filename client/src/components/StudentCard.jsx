import {
  FaUserGraduate,
  FaEnvelope,
  FaIdCard,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa";

function StudentCard({ student }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "25px",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow =
          "0 15px 30px rgba(0,0,0,.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 8px 20px rgba(0,0,0,.08)";
      }}
    >
      {/* Student Avatar */}

      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background: "#2563eb",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        <FaUserGraduate />
      </div>

      {/* Name */}

      <h2
        style={{
          color: "#1e293b",
          marginBottom: "15px",
        }}
      >
        {student.name}
      </h2>

      {/* Roll Number */}

      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
          color: "#475569",
        }}
      >
        <FaIdCard color="#2563eb" />
        <strong>Roll No:</strong> {student.rollNumber}
      </p>

      {/* Email */}

      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
          color: "#475569",
        }}
      >
        <FaEnvelope color="#16a34a" />
        {student.email}
      </p>

      {/* Department */}

      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
          color: "#475569",
        }}
      >
        <FaBuilding color="#f59e0b" />
        {student.department}
      </p>

      {/* Semester */}

      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#475569",
        }}
      >
        <FaGraduationCap color="#9333ea" />
        Semester {student.semester}
      </p>
    </div>
  );
}

export default StudentCard;