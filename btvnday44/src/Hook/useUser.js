import { useState, useEffect } from "react";
import { useRoutes } from "react-router";
import axios from "axios";

function useUser() {
  const [users, setuser] = useState([]);
  const fetchDataUsers = async () => {
    try {
      const reponse = await axios.get("https://fakestoreapi.com/users");
      setuser(reponse.data ?? []);
    } catch (error) {
      console.error("Loi khi fake Data", error);
    }
  };

  useEffect(() => {
    fetchDataUsers();
  }, []);

  return { users, setuser};
}

export default useUser;
