import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContextProvider";
import { CounterContext } from "../contexts/CounterContextProvider";

const Contador = () => {
  //   const [value, setValue] = useState(0);
  //   const { counterValue, setCounterValue } = useContext(AppContext);
  const { appLanguage } = useContext(AppContext);
  const { counterValue, increment, decrement } = useContext(CounterContext);
  console.log("Contador renderizado");
  return (
    <>
      <button onClick={decrement}>
        {appLanguage === "es" ? "Resta" : "Decrement"}
      </button>
      <span>{counterValue}</span>
      <button
        onClick={increment}
      >
        {appLanguage === "es" ? "Suma" : "Increment"}
      </button>
    </>
  );
};

export default Contador;
