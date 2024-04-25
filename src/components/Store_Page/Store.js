import React ,{useContext, useState}from "react";
import CartContextProvider from "../../store/CartContextProvider";
import NavBar from "../Nav_Bar/NavBar";
import CartProducts from "../Cart/CartProducts";
import ProductList from "../Products/ProductList";
import AuthContext from "../../store/Auth-Context";

function Store (){
    const [showcart, updatedshowcart] = useState(false);
    const showcarthandler = () => {
      updatedshowcart(true);
    };
    const hidecart = () => {
      updatedshowcart(false);
    };

    const Authctx = useContext(AuthContext)
    
    console.log(Authctx.Token);
    console.log(Authctx.Login_Status);

return  <CartContextProvider>
<div >
  <NavBar onClick={showcarthandler} showcart={true} />
  {showcart && <CartProducts onClick={hidecart} />}
  <ProductList />
</div>
</CartContextProvider>
}

export default Store;