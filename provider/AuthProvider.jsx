import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from "../src/firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const googleSignUp = () => {
    return signInWithPopup(auth, provider)
  }
  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const emailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const updateUser = userInfo => {
    return updateProfile(auth.currentUser, userInfo)
  }
  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, 
        (loggedInUser) => {
          setUser(loggedInUser)
        }
      )
      return () => {
        unSubscribe()
      }
  } , [])

  if(user){
    console.log(user)
  }
  
  const info = {googleSignUp, user, setUser, emailLogin, emailSignUp, logOut, updateUser}
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
