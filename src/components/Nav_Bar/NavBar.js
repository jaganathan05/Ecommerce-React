import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavBar = (props) => {
  
  return (
      <Navbar bg='dark' variant="dark" expand='sm'>
        <Container>
          <Navbar.Brand href="/">Jack Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gx-3">
            <Nav.Link  href='#Home'>Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Store">Store</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Button className="btn-primary btn-outline-light" onClick={props.onClick}>CART</Button>
        </Container>
      </Navbar>
   
  );
};

export default NavBar;
