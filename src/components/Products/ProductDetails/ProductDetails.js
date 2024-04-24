import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import NavBar from "../../Nav_Bar/NavBar";
import { Carousel } from "react-bootstrap";

import "./ProductDetails.css";

function ProductDetails() {
  const params = useParams();
  console.log(params.ProductId);

  return (
    <div>
      <NavBar />
      <div className="single-product-page">
        <h2>T shirts</h2>
        <div className="box">
          <Carousel>
            <Carousel.Item>
              <img
                src="/images (1).png"
                alt="Second slide"
                className="d-block w-100"
              />
              <Carousel.Caption id="caption">
                <h1>Yellow T</h1>
                <p>good Tshirt</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/images (1).png"
                alt="Second slide"
                className="d-block w-100"
              />
              <Carousel.Caption id="caption">
                <h1>Yellow T</h1>
                <p>good Tshirt</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/images (1).png"
                alt="Second slide"
                className="d-block w-100"
              />
              <Carousel.Caption id="caption">
                <h1>Yellow T</h1>
                <p>good Tshirt</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/images (1).png"
                alt="Second slide"
                className="d-block w-100"
              />
              <Carousel.Caption id="caption">
                <h1>Yellow T</h1>
                <p>good Tshirt</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/images (1).png"
                alt="Second slide"
                className="d-block w-100"
              />
              <Carousel.Caption id="caption">
                <h1>Yellow T</h1>
                <p>good Tshirt</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="product-description">
          <p>
            Classic Yellow T-Shirt Stay stylish and comfortable with our classic
            yellow T-shirt. Made from soft, breathable cotton, this T-shirt is
            perfect for everyday wear. Its vibrant yellow color adds a pop of
            brightness to your wardrobe, while the relaxed fit ensures all-day
            comfort. Whether you're out for a casual stroll or hanging out with
            friends, this T-shirt is a versatile choice. Pair it with jeans for
            a laid-back look or dress it up with a jacket for a night out.
            Available in a range of sizes, our classic yellow T-shirt is a
            must-have staple for any wardrobe.
          </p>
          <ul>
            <li>Soft and breathable cotton fabric</li>
            <li>Vibrant yellow color</li>
            <li>Relaxed fit for comfort</li>
            <li>Versatile style for any occasion</li>
            <li>Available in multiple sizes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
