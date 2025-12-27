import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h3>Gio hang dang trong</h3>;
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity,0 );
  return (
    <div>
      <h2>Gio hang</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Xoa</button>
        </div>
      ))}

      <h2>tong tien: {totalPrice}$</h2>
    </div>
  );
};

export default ShoppingCart;
