import React from "react";

const ProductCard = (props) => {
  const { product } = props;
  return (
    <div>
      <div key={product.id}>
        
        <h4>{product.title}</h4>
        <h4>{product.price}</h4>
        <img src={product.image} alt={product.title} width="100" />
      </div>
    </div>
  );
};

export default ProductCard;
