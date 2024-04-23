import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Nav_Bar/NavBar";
import ProductList from "./components/Products/ProductList";
import CartProducts from "./components/Cart/CartProducts";
import CartContextProvider from "./store/CartContextProvider";
import AboutPage from "./components/About/About";
import Home from "./components/Home/home";
import { Route } from "react-router-dom";
import Contactpage from "./components/Contact Page/ContactPage";
function App() {
  const [showcart, updatedshowcart] = useState(false);
  const showcarthandler = () => {
    updatedshowcart(true);
    console.log("yes");
  };
  const hidecart = () => {
    updatedshowcart(false);
  };

  const mainpage = (
    <CartContextProvider>
      <div className=".body">
        <NavBar onClick={showcarthandler} showcart={true} />
        {showcart && <CartProducts onClick={hidecart} />}
        <ProductList />
      </div>
    </CartContextProvider>
  );

  const store = (
    <CartContextProvider>
      <div className=".body">
        <NavBar onClick={showcarthandler} showcart={true} />
        {showcart && <CartProducts onClick={hidecart} />}
        <ProductList />
      </div>
    </CartContextProvider>
  );

  return (
    <div>
    <Route exact path="/">
      {mainpage}
    </Route>
    <Route path="/store">{store}</Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/about">
      <AboutPage />
    </Route>
    <Route path="/contact">
      <Contactpage/>
    </Route>
  </div>
  );
}
export default App;
