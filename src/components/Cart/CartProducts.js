import React from "react";
import  "./CartProducts.css"
import { Button,Row,Col,Card } from "react-bootstrap";

function CartProducts (props){
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

return <Row>
  <Card>
    <div id="box" className="container-fluid">
    <Button id='closecartbtn' className="btn-close btn-primary " onClick={props.onClick} ></Button>
    <h3 className="text-center">Cart</h3>
    <Row className="mb-2">
        <Col><h5>Item</h5></Col>
        <Col><h5>Price</h5></Col>
        <Col><h5>Quantity</h5></Col>
        <Col><span> </span></Col>
      </Row>
    <div>
      {productsArr.map((product)=>{
        return <Row className="mb-2">
        <Col><h5>{product.title}</h5></Col>
        <Col><h5>{product.price}</h5></Col>
        <Col><h5>{1}</h5></Col>
        <Col><Button className="btn btn-danger btn-outline-warning">remove</Button></Col>
      </Row>
      })}
    </div>
</div>
</Card>
</Row>



}
export default CartProducts;