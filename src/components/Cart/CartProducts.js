import React, { useContext } from "react";
import "./CartProducts.css";
import { Button, Row, Col } from "react-bootstrap";
import CartContext from "../../store/CartContext";

function CartProducts(props) {
  const cartctx = useContext(CartContext);
  const CartItems = cartctx.cartitems;

  console.log(CartItems)

  const removecartitem= async (product)=>{
    console.log(product)
    const Email = localStorage.getItem('Email')
const response = await fetch (`https://crudcrud.com/api/eb87f51010514ac189c3a928f192666f/${Email}/${product._id}`,{
  method: 'DELETE',
})

if(response.ok){
  cartctx.removeitem(product)
  alert('product deleted')
  
  
}
  }

  return <div id="box3">
  <Button
    id="closecartbtn"
    className="btn-close btn-primary "
    onClick={props.onClick}
  ></Button>
  <h3 className="text-center">Cart</h3>
  <Row className="mb-2">
    <Col>
      <h5>Item</h5>
    </Col>
    <Col>
      <h5>Price</h5>
    </Col>
    <Col>
      <h5>Quantity</h5>
    </Col>
    <Col>
    </Col>
  </Row>
  <div>
    {CartItems.map((product) => {
      return (
        <Row className="mb-2" key={product.id}>
          <Col>
            <h5>{product.title}</h5>
          </Col>
          <Col>
            <h5>{product.price}</h5>
          </Col>
          <Col>
            <h5>{1}</h5>
          </Col>
          <Col>
            <Button className="btn btn-danger btn-outline-warning btn-sm" onClick={removecartitem.bind(null,product)}>
              remove
            </Button>
          </Col>
        </Row>
      );
    })}
  </div>
  <React.Fragment>
    <h5 className="text-center">Total Amout : ${cartctx.TotalAmount}</h5>
  </React.Fragment>
</div>;
  
}
export default CartProducts;
