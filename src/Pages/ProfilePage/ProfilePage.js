import React, {useState} from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useAuth } from '../../Context/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import './ProfilePage.css';

export default function LogOutPage() {
    const {currentUser, signOut} = useAuth()
    const [error, setError] = useState()
    const history = useHistory();
    async function handleClick(e) {
        e.preventDefault()
        try{
            setError('')
           await signOut();
           history.push('/sign-in')
            
        } catch{
            setError('something went wrong please try again!')
        }
    }
    return (
        <div className='profilePage'> 
            <h1 className='profile-hd'>Profile</h1>
            {error && <Alert>{error}</Alert>}
            <div> 
            <strong> Email logged In :</strong> <span>{currentUser && currentUser.email}</span></div>
            <Link to='/update-profile' className='profileLink' > Update Profile </Link>
            <Button onClick={handleClick} className='logOut-btn'>Sign Out</Button>
        </div>
    )
}
