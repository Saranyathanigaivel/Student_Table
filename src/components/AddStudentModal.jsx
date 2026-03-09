import { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

export default function AddStudentModal({
  open,
  handleClose,
  addStudent
}) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleSubmit = () => {

    if (!form.name || !form.email || !form.age) {
      alert("All fields required");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(form.email)) {
      alert("Invalid email");
      return;
    }

    addStudent({
      ...form,
      id: Date.now()
    });

    handleClose();

    setForm({
      name: "",
      email: "",
      age: ""
    });

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

        <h2>Add Student</h2>

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
          onClick={handleSubmit}
        >
          Add Student
        </Button>

      </Box>

    </Modal>

  );
}