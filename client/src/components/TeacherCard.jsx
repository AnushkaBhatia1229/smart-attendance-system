import {
  FaUserTie,
  FaEnvelope,
  FaBook,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";

function TeacherCard({ teacher }) {
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
      {/* Avatar */}
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
        <FaUserTie />
      </div>

      {/* Name */}
      <h2
        style={{
          color: "#1e293b",
          marginBottom: "15px",
        }}
      >
        {teacher.name}
      </h2>

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
        <FaEnvelope color="#2563eb" />
        {teacher.email}
      </p>

      {/* Subject */}
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
          color: "#475569",
        }}
      >
        <FaBook color="#16a34a" />
        {teacher.subject}
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
        {teacher.department}
      </p>

      {/* Experience */}
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#475569",
        }}
      >
        <FaBriefcase color="#9333ea" />
        {teacher.experience} Years Experience
      </p>
    </div>
  );
}

export default TeacherCard;