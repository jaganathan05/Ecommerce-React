import React, { useRef } from 'react';
import NavBar from '../Nav_Bar/NavBar';
import {  Form ,Button } from 'react-bootstrap';
import './Contactpage.css'

function Contactpage (){

    const nameref = useRef();
    const emailref = useRef();
    const noref = useRef();

    const submitform = async()=>{
        const data = {
            Name: nameref.current.value,
            Email: emailref.current.value,
            PhoneNo: noref.current.value
        }
        console.log(data)

        const response = await fetch('https://react-api-test-d5c70-default-rtdb.firebaseio.com/contacts.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
          });
        
            console.log(response)
        if(response.ok){
            nameref.current.value=''
            emailref.current.value=''
            noref.current.value=''
        }
        
    }

    return <React.Fragment>
        <NavBar showcart={false}/>
        <div className='box'>
        <Form>
        <Form.Label htmlFor='name' className='label'>Name</Form.Label>
        <Form.Control type='text' placeholder='enter your name' ref={nameref} ></Form.Control>
        <Form.Label htmlFor='email' className='label'>Email</Form.Label>
        <Form.Control type='email' placeholder='enter your email' ref={emailref}></Form.Control>
        <Form.Label htmlFor='phoneno' className='label'>Phone Number</Form.Label>
        <Form.Control type='tel' placeholder='enter your phone number' ref={noref}></Form.Control>
        <Button className='btn btn-outline-light' type='button'  onClick={submitform}>Submit</Button>
        </Form>

        </div>
        </React.Fragment>

}

export default Contactpage;