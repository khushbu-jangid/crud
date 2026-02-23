import React, { useState } from "react";

function Student() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addStudent = () => {
    const newStudent = {
      id: Date.now(),
      name,
      email
    };

    setStudents([...students, newStudent]);
    setName("");
    setEmail("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };
  const [editId, setEditId] = useState(null);



const updateStudent = () => {
  setStudents(
    students.map(student =>
      student.id === editId
        ? { ...student, name, email }
        : student
    )
  );
  setEditId(null);
  setName("");
  setEmail("");
};
 

  return (
    <div>
      <h2>Student CRUD App</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* <button onClick={addStudent}>Add</button> */}
      <button onClick={editId ? updateStudent : addStudent}>
  {editId ? "Update" : "Add"}
</button>


      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.email}
            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
<button onClick={() => {
  setEditId(student.id);
  setName(student.name);
  setEmail(student.email);
}}>
  Edit
</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Student;

//this is testing comment message 