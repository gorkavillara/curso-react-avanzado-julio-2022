import { Provider } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
