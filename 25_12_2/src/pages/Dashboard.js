import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Link to="/productslist"><button>Products List</button></Link>
      </div>
      <div>
        <Link to="/userslist"><button>UsersList</button></Link>
      </div>
    </div>
  );
};

export default Dashboard;
