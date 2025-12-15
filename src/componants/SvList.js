import React from "react";

const SvList = (props) => {
  console.log(props);
  const { students, setcount } = props;
  return (
    <div>
      <h1>Danh sach sinh vien</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ten</th>
            <th>Tuoi</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setcount((e) => e + 1)}>tang</button>
        <button onClick={() => setcount((e) => e - 1)}>Giam</button>
      </div>
    </div>
  );
};

export default SvList;
