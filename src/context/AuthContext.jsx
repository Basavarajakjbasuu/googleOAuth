import { useContext, createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithRedirect
} from 'firebase/auth';

import { auth } from '../firebase/FirebaseConfig';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
    navigate('/profile')
  }

  const logout = () => {
    signOut(auth) 
    navigate('/')                                                       
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    });

    return () => {
      unsubscribe();
    };
  }, [])
  
  return (
    <AuthContext.Provider value={ { googleSignIn, logout, user } }>
      {children}
    </AuthContext.Provider>
  )

}

export const UserAuth = () => {
  return useContext(AuthContext)
}
