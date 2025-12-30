import react from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({children }) => {
  const [cartItems, setCartItems] = useState([]);

  //them vao gio hang
  const addToCart = (product) => {
    setCartItems((e) => {
      const exist = e.find((item) => item.id === product.id);

      if (exist) {
        return e.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 }: item );
      }

      return [...e, { ...product, quantity: 1, image: product.image, }];
    });
  };

  //xoa san pham
  const removeFromCart = (id) => {
    setCartItems((e) => e.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
