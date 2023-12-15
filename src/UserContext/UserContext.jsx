import React, { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AtuhContext = createContext(null);

const UserContext = ({ children }) => {
  const auth = getAuth(app);
  const googleProvaider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // google sign in function
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvaider);
  };

  //  create user with email password
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user with email password
  const loginWithEmaiPass = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //  logout function
  const logout = () => {
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      setUser(loggedUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    googleLogin,
    logout,
    createUser,
    loader,
    loginWithEmaiPass,
  };
  return (
    <AtuhContext.Provider value={authInfo}>{children}</AtuhContext.Provider>
  );
};

export default UserContext;
