import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportStudents = (data) => {

  // Add SI.No as number
  const formattedData = data.map((student, index) => ({
    "SI.No": index + 1,
    Name: student.name,
    Email: student.email,
    Age: Number(student.age)
  }));

  // Convert JSON to worksheet
  const worksheet = XLSX.utils.json_to_sheet(formattedData);

  // Set column widths (optional but cleaner)
  worksheet["!cols"] = [
    { wch: 8 },
    { wch: 20 },
    { wch: 30 },
    { wch: 8 }
  ];

  // Create workbook
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Students"
  );

  // Write file
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array"
  });

  const file = new Blob([excelBuffer], {
    type: "application/octet-stream"
  });

  saveAs(file, "students.xlsx");
};