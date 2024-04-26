import React ,{ useContext, useState}from "react";
import NavBar from "../Nav_Bar/NavBar";
import CartProducts from "../Cart/CartProducts";
import ProductList from "../Products/ProductList";
import CartContext from "../../store/CartContext";

function Store (){
    const cartctx = useContext(CartContext);
    const [showcart, updatedshowcart] = useState(false);


    const showcarthandler = async () => {
        const Email = localStorage.getItem('Email')
        const response = await fetch(`https://crudcrud.com/api/eb87f51010514ac189c3a928f192666f/${Email}`)
        const items = await response.json()
        console.log(items)
        cartctx.additem(items)
        updatedshowcart(true);
    };
    const hidecart = () => {
      updatedshowcart(false);
    };



return <div >
  <NavBar onClick={showcarthandler} showcart={true} />
  {showcart && <CartProducts onClick={hidecart} />}
  <ProductList />
</div>
}

export default Store;