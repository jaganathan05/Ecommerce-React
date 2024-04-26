// React Libraries

import React, { useContext } from "react";
import { Route  } from "react-router-dom";
import "./App.css";

// Pages 
import AboutPage from "./components/About/About";
import Home from "./components/Home/home";
import Contactpage from "./components/Contact Page/ContactPage";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import Store from "./components/Store_Page/Store";
import ProfileForm from "./components/Profile/ProfileForm";
import AuthContext from "./store/Auth-Context";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";


function App() {

  const Authctx = useContext(AuthContext);
  console.log(Authctx.Login_Status);

  setTimeout(()=>{
console.log('token removed')
localStorage.removeItem('token')


  },300000)

 


  return (
      <Switch>
        {Authctx.Login_Status && <Route path="/store">
          <Store/>
        </Route>}
        {Authctx.Login_Status && <Route path="/home">
          <Home />
        </Route>}
        {Authctx.Login_Status && <Route path="/about">
          <AboutPage />
        </Route>}
        {Authctx.Login_Status && <Route path="/contact">
          <Contactpage/>
        </Route>}
        {Authctx.Login_Status && <Route path="/Product/:ProductId">
          <ProductDetails/>
        </Route>}
        {!Authctx.Login_Status && <Route path='/signup'>
          <Signup/>
        </Route>}
        {!Authctx.Login_Status && <Route path='/login'>
          <Login/>
        </Route>}
        {Authctx.Login_Status && <Route path='/profile'>
          <ProfileForm/>
        </Route>}
        {!Authctx.Login_Status && <Route path='*' >
          <Redirect to='/login'></Redirect>
        </Route>

        }

{Authctx.Login_Status && <Route path='*' >
          <Redirect to='/store'></Redirect>
        </Route>

        }
      </Switch>
    
  );
}
export default App;
