import React, { useEffect, useContext } from "react";

import axios from "axios";
import styled from "styled-components";

import Product from "./Product";
import { StoreContext } from "../../contexts/StoreContextProvider";

const Products = () => {
  const { products, setProducts } = useContext(StoreContext);
  // useEffect(() => {
  //   initializeProducts();
  // }, [initializeProducts]);
  useEffect(() => {
    axios
      .get("https://62c343ea876c4700f539c147.mockapi.io/api/products")
      .then((res) => setProducts(res.data))
      .catch((e) => console.error(e));
  }, []); // eslint-disable-line

  const ProductsDiv = styled.div`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(50px, 1fr));
    gap: 1rem;
  `;

  return products.length > 0 ? (
    <div>
      <h3>Se han encontrado {products.length} productos</h3>
      <ProductsDiv>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsDiv>
    </div>
  ) : (
    <div>Buscando...</div>
  );
};

export default Products;
