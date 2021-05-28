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
  const { currentUser, signUp } = useAuth();
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
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setUserPass(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your Password"
            onChange={(e) => setVerifPass(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          Sign Up
        </Button>
        <div>
          Already have an account? <Link to="/sign-in">Sign in</Link>
        </div>
      </Form>
    </div>
  );
}
