import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
      <Navbar bg='dark' variant="dark" expand='sm'>
        <Container>
          <Nav className="gx-3">
          <Navbar.Brand href="/">Jack Store</Navbar.Brand>
            <Nav.Link  href='#Home'>Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Store">Store</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
  );
};

export default NavBar;
