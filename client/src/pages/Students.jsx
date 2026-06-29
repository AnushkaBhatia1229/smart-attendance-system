import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";
import API from "../services/api";

function Students() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [search, setSearch] = useState("");

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

  const addStudent = async (student) => {
    try {
      await API.post("/students", student);
      fetchStudents();
      alert("Student Added Successfully");
    } catch (err) {
      console.log(err);
      alert("Failed to Add Student");
    }
  };

  const updateStudent = async (student) => {
    try {
      await API.put(`/students/${student._id}`, student);
      fetchStudents();
      setEditingStudent(null);
      alert("Student Updated Successfully");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    const addStudent = async (student) => {
  try {
    await API.post("/students", student);
    fetchStudents();
    alert("✅ Student Added Successfully");
  } catch (err) {
    console.log(err);

    if (err.response?.data?.message.includes("duplicate")) {
      alert("❌ Email or Roll Number already exists.");
    } else {
      alert(err.response?.data?.message || "Something went wrong.");
    }
  }
};

    if (!confirmDelete) return;

    try {
      await API.delete(`/students/${id}`);
      fetchStudents();
      alert("Student Deleted Successfully");
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

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
          <h1 style={{ marginBottom: "25px" }}>
            Student Management
          </h1>

          <StudentForm
            addStudent={addStudent}
            editingStudent={editingStudent}
            updateStudent={updateStudent}
          />

          <input
            type="text"
            placeholder="Search Student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "15px",
              marginTop: "20px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />

          <StudentTable
            students={filteredStudents}
            onEdit={setEditingStudent}
            onDelete={deleteStudent}
          />
        </div>
      </div>
    </div>
  );
}

export default Students;