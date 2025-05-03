import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../firebase.init';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

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

    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const loginWithGithub = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const forgetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email);
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
        updateUser,
        loginWithGoogle,
        loginWithGithub,
        forgetPassword
    }

    return <AuthContext value={authData}>
        {
            children
        }
    </AuthContext>
};

export default AuthProvider;