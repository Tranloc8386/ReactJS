import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const DetailedProducts = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setproduct] = useState(null);

  const fetchDataid = async () => {
    try {
      const reponse = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setproduct(reponse.data ?? "");
    } catch (error) {
      console.error("Loi khi fetch Data id", error);
    }
  };

  useEffect(() => {
    fetchDataid();
  }, [id]);

  console.log(product);

  if (!product) return <h3>Loading...</h3>;

  return (
    <div style={{ margin: 50 }}>
      <h4>{product.category}</h4>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} width="150px" />
      <h4>{product.price}$</h4>
      <button onClick={()=> addToCart(product)}>Them vao gio hang</button>
    </div>
  );
};

export default DetailedProducts;
