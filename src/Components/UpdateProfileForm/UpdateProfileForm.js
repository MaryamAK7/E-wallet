import React, {useRef, useState} from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import {useHistory, Link} from 'react-router-dom';
import './UpdateProfileForm.css'
export default function UpdateProfileForm() {
    const {currentUser, updateEmail, updatePassword} = useAuth();
    const emailRef = useRef();
    const passRef = useRef();
    const passVerifRef= useRef();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

 async function handleSubmit(e){
     e.preventDefault();
     if(passRef.current.value !== passVerifRef.current.value){
        return setError('Password do mot match')
    }
    const PROMISES = []
    setError('')
    setLoading(true)
    if(emailRef.current.value!== currentUser.email){
        PROMISES.push(updateEmail(emailRef.current.value))
    }
    if(passRef.current.value!== currentUser.password){
        PROMISES.push(updatePassword(passRef.current.value))
    }
    Promise.all(PROMISES).then(
        history.push('/profile')
    ).catch(
        setError('update failed please try again')
    ).finally(
        setLoading(false)
    )

 }

  return (
    <div className='updateProfileForm-pg'>
      <Form onSubmit={handleSubmit}>
          {error && <Alert variant='danger'>{error}</Alert>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" defaultValue={currentUser.email} ref={emailRef} className='updateFormControl'/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder='Leave Blanck to keep the same' ref={passRef} className='updateFormControl'/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder='Leave Blanck to keep the same' ref={passVerifRef} className='updateFormControl'/>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading} className = 'updateBtn'>
          Update
        </Button>
        <Link to='/profile' className='cancel-btn'> <div >cancel</div> </Link>
      </Form>
    </div>
  );
}
