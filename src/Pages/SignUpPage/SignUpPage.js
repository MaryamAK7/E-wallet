import React from 'react'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'
import './SignUpPage.css'
import logout from './log-out.png';

export default function SignUpPage() {
    return (
        <div className='signUpPage'>
          <div> <img src={logout} alt='' className="signUpIcon"/></div>
          <h1 className='signup-hd'>Create your account</h1>
          <SignUpForm />
        </div>
    )
}
