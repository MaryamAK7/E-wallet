import React from 'react'
import ResetPassForm from '../../Components/ResetPassForm/ResetPassForm.js';
import './ResetPassPage.css';
import lock from './rotation-lock.png';

export default function ResetPassPage() {
    return (
        <div className='resetPage'>
            <div> <img src={lock} alt='' className="lockIcon"/></div>
            <h1 className='resetpage-hd'>Reset Your Password</h1>
            <ResetPassForm />
        </div>
    )
}
