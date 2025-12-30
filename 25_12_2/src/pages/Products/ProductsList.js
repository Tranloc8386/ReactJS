import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const reponse = await axios.get("https://fakestoreapi.com/products");
      setProducts(reponse.data ?? []);
    } catch (error) {
      console.error("Loi khi fetch Data!", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);
  return (
    <div>
      <h1>Danh sach san pham</h1>
      {products.map((product) => (
        <h1 key={product.id}>
          <h6>{product.title}</h6>
          <h6>{product.price}</h6>
          <button onClick={()=> navigate("/productdetailed")}>Xem chi tiet</button>
        </h1>
      ))}
    </div>
  );
};

export default ProductsList;
