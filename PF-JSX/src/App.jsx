import Cart from "./components/Cart"
import Error404 from "./components/Error404"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/navBar"
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext"
import Checkout from "./components/Checkout"

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/productos"} element={<ItemListContainer />} />
          <Route path={"/categoria/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App