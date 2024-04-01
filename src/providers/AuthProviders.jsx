import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)

   
    




    // create User with Email and Password

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // creating sign In User with Email and Password

    const signInUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuthStateChanged , an observer of a current user 

    useEffect(()=>{

     const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user ', currentUser)
        })

        console.log(unSubscribe)

        return ()=> {
            unSubscribe()
        }

    }, [])


    const authInfo = {user , createUser , signInUser}

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