import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element ={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;