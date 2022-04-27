import React from "react";
import SignInForm from '../../Components/SignInForm/SignInForm'
import './SignInPage.css';
import login from './login.png';

export default function SignInPage() {
  return (
    <div className='signInPage'>
       <div> <img src={login} alt='' className="signInIcon"/></div>
      <h1 className='signin-hd'>Sign In</h1>
        <SignInForm />
    </div>
  );
}
