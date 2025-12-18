import axios from "axios";
import logo from "./logo.svg";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  // const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data ?? []);
    } catch (error) {
      console.error("Loi khi fetch data", error);
    }
  };
  // console.log(fetchData);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products, "products");

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
