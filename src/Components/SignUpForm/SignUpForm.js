import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext.js";
import { Link, useHistory } from "react-router-dom";
import "./SignUpForm.css";
import Alert from 'react-bootstrap/Alert'

export default function SignUpForm() {
  const [userEmail, setUserEmail] = useState();
  const [userPass, setUserPass] = useState();
  const [verifPass, setVerifPass] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const history = useHistory();
  
  async function handleSubmit(e) {
    e.preventDefault();
    if (userPass !== verifPass) {
      return setError("Password do not match!");
    }
    try {
      setLoading(true);
      setError("");
      await signUp(userEmail, userPass);
      history.push("/wallets/");
    } catch {
      window.alert("failed");
    }
    setLoading(false);
  }
  return (
    <div>
      <Form className="sign-up-form" onSubmit={handleSubmit}>
        {error && (
          <Alert variant="danger">
            {error}
          </Alert>
        )}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUserEmail(e.target.value)}
            className = 'signUp-form-controle'
          />
          <Form.Text className="noteText">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setUserPass(e.target.value)}
            className = 'signUp-form-controle'
          />
           <Form.Text className="noteText">
            Password must be at least 6 characters.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicConfPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your Password"
            onChange={(e) => setVerifPass(e.target.value)}
            className = 'signUp-form-controle'
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading} className='signUpBtn'>
          Sign Up
        </Button>
        <div>
          Already have an account? <Link to="/sign-in" className='signInLink'>Sign in</Link>
        </div>
      </Form>
    </div>
  );
}
