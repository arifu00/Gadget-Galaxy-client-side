import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null) 
const AuthProvider = ({children}) => {

    // use state 
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  //   create user
  const createUser = (email, password, ) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

   //   sign in
   const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

   // google sign in
   const googleSignIn = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  //   sign out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   on auth change state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("User in Auth State", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

    const authInfo = {
        createUser,
        signIn,
        googleSignIn,
        logOut,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;