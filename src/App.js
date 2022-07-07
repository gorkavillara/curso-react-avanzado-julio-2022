import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import AppContextProvider from "./contexts/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Main />
      <Footer />
    </AppContextProvider>
  );
}

export default App;
