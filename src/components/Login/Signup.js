import React ,{useRef, useState} from "react";
import "./Signup.css";
import { Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Signup() { 
    const [senddata,updatesenddata]=useState(false)

    const emailref = useRef();
    const passwordref = useRef();

    const submitformhandler = async(event)=>{

    event.preventDefault()
    updatesenddata(true)
    const data = {
    email: emailref.current.value,
    password: passwordref.current.value,
    returnSecureToken: true
    }
    console.log(data)

        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAzYMyrP5pUcCeJ9QKrDnuXPIreusRbFw',{
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
            
            
        })

        if(response.ok){
            console.log(response)
            alert('Signup successfully')
            updatesenddata(false)
            emailref.current.value=''
            passwordref.current.value=''
        }
        else{
          const data = await response.json()
          alert(data.error.message)
          updatesenddata(false)
        }

    }
  return (
    <div className="box">
      <h2>SIGH UP</h2>
      <Form>
        <FormGroup controlId="email">
          <Form.Label className="lable">Enter Your Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email"
            ref={emailref}
            required
          ></Form.Control>
        </FormGroup>
        <FormGroup controlId="password">
          <Form.Label className="lable">Enter Your Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your Password" 
            ref={passwordref}
            required
          ></Form.Control>
        </FormGroup>
        {senddata && <p className="notification">Sending Request  ....</p>}
        {!senddata && <button className="btn1" type='butt' onClick={submitformhandler}>Submit</button> }
        <br/>
        <Link className="link" to="/login">
          Login to Existing Account !
        </Link>
      </Form>
    </div>
  );
  }
export default Signup;
