// Students data using localStorage
let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent(student) {
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
}
