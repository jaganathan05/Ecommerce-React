import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Nav_Bar/NavBar";
import ProductList from "./components/Products/ProductList";
import CartProducts from "./components/Cart/CartProducts";
import CartContextProvider from "./store/CartContextProvider";
import AboutPage from "./components/About/About";
import Home from "./components/Home/home";
import { Route ,Redirect } from "react-router-dom";
import Contactpage from "./components/Contact Page/ContactPage";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
function App() {
  const [showcart, updatedshowcart] = useState(false);
  const showcarthandler = () => {
    updatedshowcart(true);
    console.log("yes");
  };
  const hidecart = () => {
    updatedshowcart(false);
  };


  const store = (
    <CartContextProvider>
      <div >
        <NavBar onClick={showcarthandler} showcart={true} />
        {showcart && <CartProducts onClick={hidecart} />}
        <ProductList />
      </div>
    </CartContextProvider>
  );

  return (
    <div>
    <Route exact path="/">
      <Redirect to='/store'/>
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
    <Route path="/Product/:ProductId">
<ProductDetails/>
    </Route>
  </div>
  );
}
export default App;
