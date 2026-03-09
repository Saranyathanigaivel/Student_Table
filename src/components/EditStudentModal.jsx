import { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

export default function EditStudentModal({
  open,
  handleClose,
  student,
  updateStudent
}) {

  const [form, setForm] = useState(student);

  useEffect(() => {
    setForm(student);
  }, [student]);

  if (!form) return null;

  const handleUpdate = () => {

    updateStudent(form);
    handleClose();

  };

  return (

    <Modal open={open} onClose={handleClose}>

      <Box
        sx={{
          width: 350,
          p: 4,
          bgcolor: "white",
          mx: "auto",
          mt: "10%"
        }}
      >

        <h2>Edit Student</h2>

        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <TextField
          label="Age"
          fullWidth
          margin="normal"
          value={form.age}
          onChange={(e) =>
            setForm({ ...form, age: e.target.value })
          }
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleUpdate}
        >
          Update Student
        </Button>

      </Box>

    </Modal>

  );
}