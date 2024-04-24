import React from "react";


const CartContext = React.createContext({
    cartitems:[],
    TotalAmount : 0,
    removeitem:(id)=>{

    },
    additem : (id)=>{

    }

})

export default CartContext;