import React, {createContext, useContext, useState} from 'react'
import {auth} from '../Firebase.js';

export const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState()

    function signUp (email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function signIn (email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    return(
        <div> 
        <AuthContext.Provider value={{currentUser, setCurrentUser, signUp, signIn }}>
           {children}
        </AuthContext.Provider>
        </div>
    )
} 