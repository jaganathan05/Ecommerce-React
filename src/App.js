import React,{useState} from 'react';
import './App.css';
import NavBar from './components/Nav_Bar/NavBar';
import ProductList from './components/Products/ProductList';
import CartProducts from './components/Cart/CartProducts';
import CartContextProvider from './store/CartContextProvider';
function App() {
  const [showcart,updatedshowcart]= useState(false)
  const showcarthandler = ()=>{
updatedshowcart(true)
console.log('yes')
  }
  const hidecart =()=>{
    updatedshowcart(false)
  }
  return (
    <CartContextProvider>
      <div className=".body">

<NavBar onClick={showcarthandler} />
{showcart && <CartProducts onClick={hidecart}/>}
<ProductList/>
 </div>
    </CartContextProvider>
    
  );
}

export default App;
