import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink ,useHistory} from "react-router-dom/cjs/react-router-dom.min";
import './NavBar.css'
import AuthContext from "../../store/Auth-Context";

const NavBar = (props) => {
  const histroy = useHistory()
  const Authctx = useContext(AuthContext)

  const logouthandler = ()=>{
      Authctx.logouthandler() 
      histroy.push('/login')
  }
  
  return (
      <Navbar bg='dark' variant="dark" expand='sm' fixed="top">
        <Container >
          <Navbar.Brand href="/">Jack Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gx-3" id='navbar'>
            <NavLink  to='/home' className="navlink" >Home</NavLink>
            <NavLink to="/store" className="navlink">Store</NavLink>
            <NavLink to="/about" className="navlink">About</NavLink>
            <NavLink to="/contact" className="navlink">Contact</NavLink>
            <NavLink to='/profile' className="navlink">Profile</NavLink>
            
          </Nav>
          <button onClick={logouthandler}  >Logout</button>
          </Navbar.Collapse>
          {props.showcart && <Button className="btn btn-primary btn-outline-light " onClick={props.onClick} >CART</Button>}
          
        </Container>
      </Navbar>
   
  );
};

export default NavBar;
