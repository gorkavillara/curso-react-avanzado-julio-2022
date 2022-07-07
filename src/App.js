import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products/Products";
import Main from "./components/Main";
import AppContextProvider from "./contexts/AppContextProvider";
import StoreContextProvider from "./contexts/StoreContextProvider";

function App() {
  return (
    <AppContextProvider>
      <StoreContextProvider>
        <Header />
        {/* <Main /> */}
        <Products />
      </StoreContextProvider>
      <Footer />
    </AppContextProvider>
  );
}

export default App;
