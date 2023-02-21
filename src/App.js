
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

//context
import ProductContextProvider from "./context/ProductContext";

//components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import CartContextProvider from "./context/CartContextProvider";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

function App() {
  return (
    <div className="body">
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider></div>
  );
}

export default App;
