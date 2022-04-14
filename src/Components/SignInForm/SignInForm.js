import React, { useRef, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import './SignInForm.css'

export default function SignINForm() {
const passRef  = useRef();
const emailRef = useRef();
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
const {signIn} = useAuth();
const history = useHistory();

async function handleSubmit(e){
  e.preventDefault();
  try{
    setLoading(true)
   await signIn(emailRef.current.value,passRef.current.value)
    history.push('/profile')
  } catch{
    setError('sign in failed! please try again')
  }
  setLoading(false)
}
  return (
    <div className='sign-in-form'>
      <Form onSubmit={handleSubmit}>
       {error && <Alert variant='danger'> {error} </Alert> }
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} className='signIn-form-controle'/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passRef}  className='signIn-form-controle' />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading} className = 'signIn-btn'>
          Sign In
        </Button>
        <div><Link to='/reset-pass' className="forgotPassLink"> Forgot your password? </Link> </div>
        <div>Don't have an account? <Link to='/sign-up' className="signUpLink">Sign Up</Link> </div> 
      </Form>
    </div>
  );
}
