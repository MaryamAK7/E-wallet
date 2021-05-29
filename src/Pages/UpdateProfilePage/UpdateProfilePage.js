import React from 'react'
import UpdateProfileForm from '../../Components/UpdateProfileForm/UpdateProfileForm';
import './UpdateProfilePage.css'

export default function UpdateProfilePage() {
    return (
        <div className='updateProf-pg'>
            <h1 className='updateprof-hd'>Update your profile</h1>
            <UpdateProfileForm />
            
        </div>
    )
}
