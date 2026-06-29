import { useState, useEffect } from "react";

function TeacherForm({ addTeacher, editingTeacher, updateTeacher }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    department: "",
    experience: "",
  });

  useEffect(() => {
    if (editingTeacher) {
      setFormData(editingTeacher);
    }
  }, [editingTeacher]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTeacher) {
      updateTeacher(formData);
    } else {
      addTeacher(formData);
    }

    setFormData({
      name: "",
      email: "",
      subject: "",
      department: "",
      experience: "",
    });
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "15px",
        marginBottom: "25px",
      }}
    >
      <h2>
        {editingTeacher ? "Update Teacher" : "Add Teacher"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <input
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />

        <input
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
        />

        <button type="submit">
          {editingTeacher ? "Update Teacher" : "Add Teacher"}
        </button>
      </form>
    </div>
  );
}

export default TeacherForm;