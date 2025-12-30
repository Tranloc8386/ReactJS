import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const reponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(reponse.data ?? []);
    } catch (error) {
      console.error("Loi khi fetch Data!", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(users);

  return (
    <div>
      <h1>Danh sach users</h1>
      {users.map((user) => (
        <h6 key={user.id}>
          <h4>{user.id}</h4>
          <h4>{user.name}</h4>
          <h4>{user.phone}</h4>
          <button onClick={() => navigate("/UserDetail")}>Xem chi tiet</button>
        </h6>
      ))}
    </div>
  );
};

export default UsersList;
