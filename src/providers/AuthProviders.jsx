import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

   
    // create User with Email and Password

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign In User with Email and Password

    const signInUser = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user 

    const logOut = () => {
        setLoading(true)

       return signOut(auth)
    }

    // login with google popup

    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }


    // onAuthStateChanged , an observer of a current user 

    useEffect(()=>{

     const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        })

        console.log(unSubscribe)

  

        return ()=> {
            unSubscribe()
        }

    }, [])


    const authInfo = {user , createUser , signInUser, logOut, loading, loginWithGoogle}

    return (

        <AuthContext.Provider value={authInfo} >

            {children}

            
        </AuthContext.Provider >
    );
};
AuthProviders.propTypes = {
    children: PropTypes.node
  }

export default AuthProviders;