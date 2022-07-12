import React, { useEffect, useState } from "react";

const ProductsFetchComponent = ({ propsId }) => {
  const [id, setId] = useState(1);
  console.log(id);
  console.log("Se ha renderizado el ProductsFetchComponent");

  useEffect(() => {
    if (!id) return;
    console.log("Se ha ejecutado el useEffect");
  }, []); //eslint-disable-line

  return <div>ProductsFetchComponent</div>;
};

export default ProductsFetchComponent;
