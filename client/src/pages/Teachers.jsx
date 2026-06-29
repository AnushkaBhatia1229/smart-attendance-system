import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TeacherForm from "../components/TeacherForm";
import TeacherTable from "../components/TeacherTable";
import API from "../services/api";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [editingTeacher, setEditingTeacher] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const res = await API.get("/teachers");
      setTeachers(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTeacher = async (teacher) => {
    try {
      await API.post("/teachers", teacher);
      fetchTeachers();
    } catch (err) {
      console.log(err);
    }
  };

  const updateTeacher = async (teacher) => {
    try {
      await API.put(`/teachers/${teacher._id}`, teacher);
      fetchTeachers();
      setEditingTeacher(null);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTeacher = async (id) => {
    try {
      await API.delete(`/teachers/${id}`);
      fetchTeachers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#eef2f7",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h1 style={{ marginBottom: "20px" }}>
            Teacher Management
          </h1>

          <TeacherForm
            addTeacher={addTeacher}
            editingTeacher={editingTeacher}
            updateTeacher={updateTeacher}
          />

          <TeacherTable
            teachers={teachers}
            onEdit={setEditingTeacher}
            onDelete={deleteTeacher}
          />
        </div>
      </div>
    </div>
  );
}

export default Teachers;