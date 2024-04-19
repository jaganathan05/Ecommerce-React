import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Nav_Bar/NavBar";
import ProductList from "./components/Products/ProductList";
import CartProducts from "./components/Cart/CartProducts";
import CartContextProvider from "./store/CartContextProvider";
import AboutPage from "./components/About/About";
function App() {
  const [showcart, updatedshowcart] = useState(false);
  const showcarthandler = () => {
    updatedshowcart(true);
    console.log("yes");
  };
  const hidecart = () => {
    updatedshowcart(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <CartContextProvider>
          <div className=".body">
            <NavBar onClick={showcarthandler} showcart={true}/>
            {showcart && <CartProducts onClick={hidecart} />}
            <ProductList />
          </div>
        </CartContextProvider>
      ),
    },
    {
      path: '/about',
      element: <AboutPage/>
    },
    {
      path: "/store",
      element: (
        <CartContextProvider>
          <div className=".body">
            <NavBar onClick={showcarthandler} showcart={true}/>
            {showcart && <CartProducts onClick={hidecart} />}
            <ProductList />
          </div>
        </CartContextProvider>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
