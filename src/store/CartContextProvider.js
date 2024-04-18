import {  useState } from "react";
import CartContext from "./CartContext";

function CartContextProvider (props){
    const [cartitems , updatedcartitems] = useState([])
    const [totalamount , updatedtotal] = useState(0)

    const additemtocart =(product)=>{

        if (cartitems.some(item => item.id === product.id)) {
            return; 
          }
      
          updatedcartitems((prevItems) => [...prevItems, product]);
          updatedtotal((prevTotalAmount) => prevTotalAmount + Number(product.price));
    }

    const removeitemhandler = (product)=>{
updatedcartitems((previtems)=>{
    const filtereditems = previtems.filter((prod)=> prod.id !== product.id)
    
    return [...filtereditems]
})
updatedtotal(prevamount=> prevamount - Number(product.price))
    }
    

    const Cartcontext={
        cartitems:cartitems,
        TotalAmount:totalamount ,
    removeitem:removeitemhandler,
    additem : additemtocart
        
}

return <CartContext.Provider value={Cartcontext}>{props.children}</CartContext.Provider>
}
export default CartContextProvider;