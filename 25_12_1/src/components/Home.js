import { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Space, Table, Button } from "antd";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [products, setproduct] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const reponse = await axios.get("https://fakestoreapi.com/products");
      setproduct(reponse.data ?? []);
    } catch (error) {
      console.error("Loi khi fetch Data!", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (id) => `${id}`,
    },
    {
      title: "Ten san pham",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Gia",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price}$`,
    },

    {
      title: "Anh",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="product"
          style={{ width: 80, height: 80, objectFit: "contain" }}
        />
      ),
    },
    {
      title: "Chi tiet",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => navigate(`/detailedproducts/${record.id}`)}
        >
          Xem chi tiết
        </Button>
      ),
    },
  ];

  return (
    <div>
      <button onClick={()=> navigate("/shoppingcart")}>Gio hang</button>
      <Table columns={columns} dataSource={products} rowKey="id" />
      
    </div>
  );
};

export default Home;
