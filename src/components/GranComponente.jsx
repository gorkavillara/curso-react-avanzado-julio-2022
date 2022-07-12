import React from "react";

function multiplica(base, multiplicador) {
  if (multiplicador === 1) {
    return base;
  } else {
    return base + multiplica(base, multiplicador - 1);
  }
}

export function multiplica2(base, multiplicador) {
  let valor = base;
  for (let i = 1; i < multiplicador; i++) {
    valor += base;
  }
  return valor;
}

const GranComponente = () => {
  performance.mark("inicioRenderizado");
  //   console.log(multiplica(5, 10000));
  console.log(multiplica2(5, 100000000));
  performance.mark("finRenderizado");
  performance.measure(
    "Total Renderizado",
    "inicioRenderizado",
    "finRenderizado"
  );
  return <div>GranComponente</div>;
};

export default GranComponente;
