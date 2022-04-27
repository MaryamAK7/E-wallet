import React from 'react'
import UpdateProfileForm from '../../Components/UpdateProfileForm/UpdateProfileForm';
import './UpdateProfilePage.css'
import update from './updated.png';

export default function UpdateProfilePage() {
    return (
        <div className='updateProf-pg'>
            <div> <img src={update} alt='' className="updateIcon"/></div>
            <h1 className='updateprof-hd'>Update your profile</h1>
            <UpdateProfileForm />
            
        </div>
    )
}
