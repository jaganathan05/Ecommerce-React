import React ,{useContext, useRef,useState}from "react";
import NavBar from "../Nav_Bar/NavBar"; 
import { Form, FormGroup } from "react-bootstrap";
import './ProfileForm.css'
import AuthContext from "../../store/Auth-Context";

function ProfileForm() { 
  const Authctx = useContext(AuthContext);

    const [senddata,updatesenddata]=useState(false)
    const passwordref = useRef();

    const submitformhandler = async(event)=>{
    event.preventDefault();
    updatesenddata(true)

      const data = {
      idToken	: Authctx.Token,
      password : passwordref.current.value,
      returnSecureToken : true

      }
      console.log(data)

            const response = await fetch ('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDAzYMyrP5pUcCeJ9QKrDnuXPIreusRbFw',{
              method: "POST",
              headers:{
                'Content-Type': 'application/json'
              },
              body : JSON.stringify(data)
            })

            if(response.ok){
              alert('password change successfully ')
              updatesenddata(false)
              passwordref.current.value=''
              const data =await response.json()
              Authctx.loginhandler(data.idToken)
            }

    }


  return (
    <div>
      <NavBar showcart={false} />
      <div className="box1">
        <Form> 
          <h2>Change Password</h2>
          <FormGroup controlId="password">
            <Form.Label className="lable">Enter Your New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your Password"
              ref={passwordref}
              required
            ></Form.Control>
          </FormGroup>
          {senddata && <p className="notification">Sending Request ....</p>}
          {!senddata && (
            <button className="btn1" type="button" onClick={submitformhandler}>
              Change Password
            </button>
          )}
        </Form>
      </div>
    </div>
  );
}

export default ProfileForm;
