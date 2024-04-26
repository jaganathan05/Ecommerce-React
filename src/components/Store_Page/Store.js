import React ,{ useState}from "react";
import CartContextProvider from "../../store/CartContextProvider";
import NavBar from "../Nav_Bar/NavBar";
import CartProducts from "../Cart/CartProducts";
import ProductList from "../Products/ProductList";

function Store (){
    const [showcart, updatedshowcart] = useState(false);
    const showcarthandler = () => {
      updatedshowcart(true);
    };
    const hidecart = () => {
      updatedshowcart(false);
    };



return  <CartContextProvider>
<div >
  <NavBar onClick={showcarthandler} showcart={true} />
  {showcart && <CartProducts onClick={hidecart} />}
  <ProductList />
</div>
</CartContextProvider>
}

export default Store;