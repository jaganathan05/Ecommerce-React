import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavBar = (props) => {
  
  return (
      <Navbar bg='dark' variant="dark" expand='sm' fixed="top">
        <Container>
          <Navbar.Brand href="/">Jack Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gx-3">
            <Nav.Link  href='/home' className="btn-outline-light ">Home</Nav.Link>
            <Nav.Link href="/about" className="btn-outline-light ">About</Nav.Link>
            <Nav.Link href="/store" >Store</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          {props.showcart && <Button className="btn-primary btn-outline-light" onClick={props.onClick}>CART</Button>}
          
        </Container>
      </Navbar>
   
  );
};

export default NavBar;
