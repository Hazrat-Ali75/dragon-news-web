import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../firebase.init';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
    const createUser = (email,password) =>{
        setLoading(true);
       return  createUserWithEmailAndPassword(auth, email, password)
    }
    
    const updateUser = (updateData) =>{
       return updateProfile(auth.currentUser,updateData );
    }

    const logIn =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        logIn,
        logOut,
        loading,
        setLoading,
        updateUser
    }

    return <AuthContext value={authData}>
        {
            children
        }
    </AuthContext>
};

export default AuthProvider;