import React from "react";
import SignInForm from '../../Components/SignInForm/SignInForm'
import './SignInPage.css'
export default function SignInPage() {
  return (
    <div>
      <h1 className='signin-hd'>Sign In</h1>
        <SignInForm />
    </div>
  );
}
