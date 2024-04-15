import React from "react";
import { Button, Card, Container ,Row,Col} from "react-bootstrap";

const ProductList = () => {
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

  return (
    <div>
      <Container>
        <Row className="">
          {productsArr.map((product) => {
           return  <Col className="col-6 col-md-4 col-xl-3 g-5">
              <Card>
                <Card.Img variant="top" src={product.imageUrl}></Card.Img>
                <Card.Body className="d-flex  flex-column align-items-center ">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Button className=" btn-light btn-outline-danger ">ADD TO CART</Button>
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
