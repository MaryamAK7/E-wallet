import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext.js";
import Alert from "react-bootstrap/Alert";
import "./ResetPassForm.css";
import {Link} from 'react-router-dom';

export default function ResetPassForm() {
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox for further information");
    } catch {
      setLoading(false);
      setError("Failed to reset");
    }
    setLoading(false);
  }
  return (
    <div className="resetPass-form">
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} className ='resetPass-form-control' />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading} className = 'resetPassBtn'>
          Reset Password
        </Button>
      </Form>
      <div>
        <Link to="/sign-in" className='resetLink'> Sign in </Link>{" "}
      </div>
      <div>
        Need an account? <Link to="/sign-up" className='resetLink'>Sign up </Link>
      </div>
    </div>
  );
}
