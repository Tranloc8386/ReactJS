import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'


const Dashboard = () => {
  const [users, setuser] = useState([]);
  const [products, setproduct] = useState([]);
  const localEmail=localStorage.getItem("userMail");

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

useEffect(()=>
{
    fetchDataProducts();
}, [])

  console.log(users);
  console.log(products)

  return <div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Price</th>

                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.price}</td>

                    </tr>

                ))}
            </tbody>
        </table>
    </div>
    <div>
      <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>

                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name.firstname}</td>

                    </tr>

                ))}
            </tbody>
        </table>
    </div>
    <Link to ="/"><button>Logout</button></Link>
  </div>;
  
};

export default Dashboard;
