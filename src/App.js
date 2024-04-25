// React Libraries

import React from "react";
import { Route ,Redirect } from "react-router-dom";
import "./App.css";

// Pages 
import AboutPage from "./components/About/About";
import Home from "./components/Home/home";
import Contactpage from "./components/Contact Page/ContactPage";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import Store from "./components/Store_Page/Store";
import { AuthContextProvider } from "./store/Auth-Context";


function App() {
 


  

  return (
    <AuthContextProvider> 
      <div>
    <Route exact path="/">
      <Redirect to='/store'/>
    </Route>
    <Route path="/store">
      <Store/>
    </Route>
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
    <Route path='/signup'>
<Signup/>
    </Route>
    <Route path='/login'>
      <Login/>
    </Route>
  </div>
       </AuthContextProvider>
    
  );
}
export default App;
