import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import "antd/dist/reset.css";
import { Table } from "antd";

const App = () => {
  const [user, setuser] = useState([]);

  const fetchData = async () => {
    try {
      const reponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setuser(reponse.data ?? []);
    } catch (error) {
      console.error("Loi khi fetchData", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(user);

  const dataSource = [
    {
      id: "1",
      name: "Mike",
      email: 32,
    },
    {
      key: "2",
      name: "John",
      age: 42,
    },
  ];

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "address",
      dataIndex: ["address", "street"],
      key: "street",
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      key: "city",
    },
  ];

  return (
    <div>
      <Table dataSource={user} columns={columns} rowKey="id" />;
    </div>
  );
};

export default App;
