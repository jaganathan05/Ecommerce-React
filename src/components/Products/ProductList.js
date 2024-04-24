import React, { useContext } from "react";
import { Button, Card, Container ,Row,Col} from "react-bootstrap";
import CartContext from "../../store/CartContext";
import './ProductList.css'
import { Link } from "react-router-dom/cjs/react-router-dom";
const ProductList = () => {
  const cartctx = useContext(CartContext)
  const productsArr = [
    {id: 'sq1',
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {id: '12jbk',
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    { id:'hi1',
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    { id:'128x',
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const addtocart = (product)=>{
cartctx.additem(product)
  }

  return (
    <div className="product-list">
      <Container>
        <Row className="">
          {productsArr.map((product) => {
           return  <Col key={product.id} className="col-6 col-md-4 col-xl-3 g-5">
              <Card>
              <Link to={`/Product/${product.id}`}>
                <Card.Img variant="top" src={product.imageUrl}></Card.Img>
                </Link>
                <Card.Body className="d-flex  flex-column align-items-center ">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Button className=" btn-light btn-outline-danger btn-sm" onClick={addtocart.bind(null,product)}>ADD TO CART</Button>
                </Card.Body>
              </Card>
            </Col>;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
