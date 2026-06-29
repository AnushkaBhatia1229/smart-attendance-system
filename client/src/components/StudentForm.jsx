import { useEffect, useState } from "react";

function StudentForm({ addStudent, editingStudent, updateStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    email: "",
    department: "",
    semester: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.rollNumber ||
      !formData.email ||
      !formData.department ||
      !formData.semester
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingStudent) {
      updateStudent(formData);
    } else {
      addStudent(formData);
    }

    setFormData({
      name: "",
      rollNumber: "",
      email: "",
      department: "",
      semester: "",
    });
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        marginBottom: "30px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        {editingStudent ? "Edit Student" : "Add Student"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number"
            value={formData.rollNumber}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
          />

          <input
            type="number"
            name="semester"
            placeholder="Semester"
            value={formData.semester}
            onChange={handleChange}
          />
        </div>

        <button
          style={{
            marginTop: "25px",
            width: "220px",
          }}
        >
          {editingStudent ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;