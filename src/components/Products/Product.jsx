import React, { useContext } from "react";

import styled from "styled-components";
import { StoreContext } from "../../contexts/StoreContextProvider";

const ProductHolder = styled.div`
  display: flex;
  width: 100px;
  padding: 0;
  flex-direction: column;
  border-radius: 1rem;
  background-color: #f5f5f5;
  box-shadow: 0 0 2rem #a1a1a1;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100%;
  }
  .product-title {
    padding: 1rem;

    span {
      font-size: 0.5rem;
    }
    button {
      margin-top: 0.5rem;
      font-size: 0.6rem;
      background-color: green;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;

const Product = ({ product }) => {
  const { addToCart } = useContext(StoreContext);
  return (
    <ProductHolder>
      <img src={product.image} alt={product.title} />
      <div className="product-title">
        <span>{product.title}</span>
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
      </div>
    </ProductHolder>
  );
};

export default Product;
