import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/cartContext";
import Card from "./components/Products/Card";
import CartView from "./components/CartView/CartView";
import app from "./services/firestore"

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Elite Gaming" />} />

        <Route path="/categoria/productos" element={<ItemListContainer />}></Route>

        <Route path="/categoria/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404: Te perdiste</h1>} />
        <Route path="/Cart" element={<CartView/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
