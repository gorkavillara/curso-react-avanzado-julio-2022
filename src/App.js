import { useState } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import store from "./store";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "Bajar la basura", completed: false },
  ]);
  return (
    <Provider store={store}>
      <div className="w-screen h-screen">
        <Header />
        <Main todoList={todoList} setTodoList={setTodoList} />
      </div>
    </Provider>
  );
}

export default App;
