import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableContainer, Paper } from "@mui/material";

export default function StudentTable({
  students,
  deleteStudent,
  openEdit
}) {

  return (

    <TableContainer component={Paper} className="table-wrapper">
<Table>

      <TableHead>
        <TableRow>

          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Actions</TableCell>

        </TableRow>
      </TableHead>

      <TableBody>

        {students.map((s) => (

          <TableRow key={s.id}>

            <TableCell>{s.name}</TableCell>
            <TableCell>{s.email}</TableCell>
            <TableCell>{s.age}</TableCell>

            <TableCell>

              <IconButton
                onClick={() => openEdit(s)}
              >
                <EditIcon />
              </IconButton>

              <IconButton
                onClick={() => deleteStudent(s.id)}
              >
                <DeleteIcon />
              </IconButton>

            </TableCell>

          </TableRow>

        ))}

      </TableBody>

    </Table>
</TableContainer>

  );
}