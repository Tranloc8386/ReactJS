import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Dashboard = () => {
  const [users, setuser] = useState([]);
  const [products, setproduct] = useState([]);
  const navigate = useNavigate();

  //xu ly log out
  const handleLogout = () => {
    navigate("/");
  };

  const fetchDataUsers = async () => {
    try {
      const reponse = await axios.get("https://fakestoreapi.com/users");
      setuser(reponse.data ?? []);
    } catch (error) {
      console.error("Loi khi fake Data", error);
    }
  };

  const fetchDataProducts = async () => {
    try {
      const reponse = await axios.get("https://fakestoreapi.com/products");
      setproduct(reponse.data ?? []);
    } catch (error) {
      console.error("Loi khi fake Data", error);
    }
  };

  useEffect(() => {
    fetchDataUsers();
  }, []);

  useEffect(() => {
    fetchDataProducts();
  }, []);

  console.log(users);
  console.log(products);

  return (
    <div>
      <div onClick={handleLogout}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Log out</Button>
        </Stack>
      </div>
      <div>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name.firstname}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Dashboard;
