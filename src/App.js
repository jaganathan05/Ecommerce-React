import React,{useState} from 'react';
import './App.css';
import NavBar from './components/Nav_Bar/NavBar';
import ProductList from './components/Products/ProductList';
import CartProducts from './components/Cart/CartProducts';
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
    <div className=".body">

   <NavBar onClick={showcarthandler} />
   {showcart && <CartProducts onClick={hidecart}/>}
   <ProductList/>
    </div>
  );
}

export default App;
