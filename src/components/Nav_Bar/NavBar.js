import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './NavBar.css'

const NavBar = (props) => {
  
  return (
      <Navbar bg='dark' variant="dark" expand='sm' fixed="top">
        <Container>
          <Navbar.Brand href="/">Jack Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gx-3" id='navbar'>
            <NavLink  to='/home' className="navlink" >Home</NavLink>
            <NavLink to="/store" className="navlink">Store</NavLink>
            <NavLink to="/about" className="navlink">About</NavLink>
            <NavLink to="/contact" className="navlink">Contact</NavLink>
          </Nav>
          </Navbar.Collapse>
          {props.showcart && <Button className="btn-primary btn-outline-light" onClick={props.onClick}>CART</Button>}
          
        </Container>
      </Navbar>
   
  );
};

export default NavBar;
