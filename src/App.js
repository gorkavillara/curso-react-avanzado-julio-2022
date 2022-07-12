import { multiplica2 } from "./components/GranComponente";
import axios from "axios";

import { useState, useMemo, useCallback, useEffect } from "react";
import ContadorComponent from "./components/ContadorComponent";
import ContadorDisplay from "./components/ContadorDisplay";
import UserComponent from "./components/UserComponent";
import MemoUserComponent from "./components/MemoUserComponent";
import BadUserComponent from "./components/BadUserComponent";
import styled from "styled-components";
import ProductsFetchComponent from "./components/ProductsFetchComponent";
import ContadorButton from "./components/ContadorButton";

const Cuadrito = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: blue;
  border: solid 1px white;
`;

function App() {
  // const [user, setUser] = useState({ name: "", lastName: "" });
  const [contador, setContador] = useState(1);

  // const asyncFunction = useCallback(() => axios.get("..."), [])
  // useEffect(() => {
  //   if (!asyncFunction) return
  //   asyncFunction()
  // }, [asyncFunction])

  const increment = useCallback(
    () => setContador(contador + 1),
    [contador]
  );

  // const showContador = useCallback(
  //   () =>
  //     contador < 10
  //       ? console.log("Contador menor que 10")
  //       : console.log(`Contador: ${contador}`),
  //   [contador]
  // );

  // const selector = useCallback(listado => listado.filter(item => item.active), [])

  // const state = {
  //   1: "Hyobin",
  //   2: "Gorka",
  //   3: "Carlos"
  // }
  // useSelector(useCallback(state => state[id]), [id])

  // const nuevoValor = multiplica2(contador, 1000000000)

  // const nuevoValor = useMemo(
  //   () => multiplica2(contador, 1000000000),
  //   [contador]
  // );
  // console.log("nuevoValor", nuevoValor);

  // const producto = useMemo(
  //   () =>
  //     axios
  //       .get(
  //         `https://62c343ea876c4700f539c147.mockapi.io/api/products`
  //       )
  //       .then((res) => res.data)
  //       .catch((e) => console.error(e)),
  //   []
  // );
  // let lista = []
  // producto.then((r) => {
  //   lista = [...r]
  // });

  // const CuadritosComponent = useMemo(
  //   () =>
  //     Array(contador)
  //       .fill(0)
  //       .map((_, id) => <Cuadrito key={id} />),
  //   [contador]
  // );

  // const arrayCuadritos = useMemo(() => {
  //   console.log("Me he vuelto a generar");
  //   return new Array(contador).fill(0);
  // }, [contador]);
  // console.log(arrayCuadritos);
  // const ar = [1, 2, 3, 4, 5];

  return (
    <div>
      {/* <GranComponente /> */}
      {/* <div>
        <span>Active User</span>
        <span>Name: {user.name}</span>
        <span>Last Name: {user.lastName}</span>
      </div> */}
      {/* <ContadorComponent contador={contador} increment={increment} /> */}
      {/* <ContadorDisplay contador={contador} /> */}
      {/* <UserComponent setUser={setUser} />
      <MemoUserComponent setUser={setUser} />
      {arrayCuadritos.map((_, id) => (
        <Cuadrito key={id} />
      ))} */}
      {/* {lista.map(r => <span key={r.id}>{r.title}</span>)} */}
      {/* <BadUserComponent user={user} setUser={setUser} /> */}

      {/* <ProductsFetchComponent /> */}
      <ContadorDisplay contador={contador} />
      <ContadorButton increment={increment} />
    </div>
  );
}

export default App;
