import {  useState } from "react";
import CartContext from "./CartContext";

 function CartContextProvider (props){
    

    const [cartitems , updatedcartitems] = useState([])
    const [totalamount , updatedtotal] = useState(0) 
   

    const additemtocart =(products)=>{

        console.log(products)
          updatedcartitems([...products]);
          let  total_amount  = 0; 
          products.forEach(product => {
            total_amount +=  Number(product.price)
            
          });
          updatedtotal(total_amount);
    }

    const removeitemhandler = (product)=>{
updatedcartitems((previtems)=>{
    const filtereditems = previtems.filter((prod)=> prod._id !== product._id)
    
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

console.log(Cartcontext)

return <CartContext.Provider value={Cartcontext}>{props.children}</CartContext.Provider>
}
export default CartContextProvider;