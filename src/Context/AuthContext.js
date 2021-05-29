import React, {createContext, useContext, useState, useEffect} from 'react'
import {auth} from '../Firebase.js';

export const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signUp (email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function signIn (email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email);
    }
    function signOut (){
        return auth.signOut();
    }
    function updateEmail (email){
        return currentUser.updateEmail(email);
    }
    function updatePassword (password){
        return currentUser.updatePassword(password);
    }
    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged( user => {
           setCurrentUser(user)
           setLoading(false)
       })
       return unsubscribe;
    }, [])
    return(
        <div> 
        <AuthContext.Provider value={{currentUser, setCurrentUser, signUp, signIn, resetPassword,signOut,updateEmail,updatePassword }}>
           {!loading && children}
        </AuthContext.Provider>
        </div>
    )
} 