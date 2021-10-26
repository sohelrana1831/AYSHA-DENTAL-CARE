import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./../../Firebase/firebase.config";
const AuthContext = createContext();

// Make useAuth
export const useAuth = () => useContext(AuthContext);

// Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // sign up using email password
  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  // User Logout
  const logout = () => {
    return auth.signOut();
  };

  // User login using email password
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  // google SignUp
  const googleSignUp = () => {
    return auth.signInWithPopup(googleProvider);
  };

  // github SignUp
  const githubSignUp = () => {
    return auth.signInWithPopup(githubProvider);
  };

  // forget Password
  const forgetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  // Get Current Login user
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);

  // Context values
  const value = {
    signUp,
    currentUser,
    logout,
    login,
    googleSignUp,
    githubSignUp,
    forgetPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
