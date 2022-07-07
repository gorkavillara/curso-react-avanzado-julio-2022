import { useState, createContext } from "react";

export const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => {
  const [counterValue, setCounterValue] = useState(0);

  const increment = () => setCounterValue((prevValue) => prevValue + 1);
  const decrement = () => setCounterValue((prevValue) => prevValue - 1);

  return (
    <CounterContext.Provider value={{ counterValue, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;

// function reductor(state, action) {
//     switch(action.type) {
//         case "MULTIPLICA_POR_DOS":
//             return state * 2
//         default:
//             return state
//     }
// }
