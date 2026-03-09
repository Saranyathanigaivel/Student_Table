import { useState, useEffect } from "react";
import studentsData from "./data/students";
import StudentTable from "./components/StudentTable";
import AddStudentModal from "./components/AddStudentModal";
import EditStudentModal from "./components/EditStudentModal";
import { exportStudents } from "./utils/exportExcel";
import { Container, Button, TextField, Stack } from "@mui/material";


function App() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {

    setTimeout(() => {
      setStudents(studentsData);
      setLoading(false);
    }, 1000);

  }, []);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (updated) => {

    setStudents(
      students.map((s) =>
        s.id === updated.id ? updated : s
      )
    );

  };

  const deleteStudent = (id) => {

    if (window.confirm("Delete Student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }

  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (

    <Container className="container-box">
    <h1 className="title">Student Management</h1>

      <TextField
className="search-box"
label="Search Student"
fullWidth
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<br></br>

      <Stack
direction={{ xs: "column", sm: "row" }}
spacing={2}
marginTop={2}
>

<Button
variant="contained"
onClick={()=>setOpenAdd(true)}
>
Add Student
</Button>

<Button
variant="outlined"
onClick={()=>exportStudents(filteredStudents)}
>
Download Excel
</Button>

</Stack>

      <StudentTable
        students={filteredStudents}
        deleteStudent={deleteStudent}
        openEdit={(student) => {
          setSelectedStudent(student);
          setOpenEdit(true);
        }}
      />

      <AddStudentModal
        open={openAdd}
        handleClose={() => setOpenAdd(false)}
        addStudent={addStudent}
      />

      <EditStudentModal
        open={openEdit}
        handleClose={() => setOpenEdit(false)}
        student={selectedStudent}
        updateStudent={updateStudent}
      />

    </Container>

  );
}

export default App;