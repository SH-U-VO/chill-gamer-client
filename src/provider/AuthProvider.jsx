// src/provider/AuthProvider.jsx
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

import{ AuthContext } from '../context/AuthContext'

const AuthProvider = ({ children }) => {
  const [userDb, setUserDb] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // Listen for Firebase Auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ GOOGLE SIGN IN (REMOVED NAVIGATE)
  const googleLogIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;

      // Send to MongoDB (check if user already exists)
      const res = await fetch('http://localhost:3000/users');
      const users = await res.json();

      const foundUser = users.find((u) => u.email === loggedInUser.email);

      if (!foundUser) {
        const newUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          image: loggedInUser.photoURL,
          myReviews: [],
          myWatchlist: [],
        };

        await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        });
      }

      return loggedInUser; // ✅ Return user on success

    } catch (error) {
      console.error('Google login error:', error.code, error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.error('Firebase createUser Error:', error.code, error.message);
        throw error;
      })
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.error('Firebase signInUser Error:', error.code, error.message);
        throw error;
      })
      .finally(() => setLoading(false));
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null);
        setUserDb(null);
      })
      .catch((error) => {
        console.error('Firebase logOut Error:', error.code, error.message);
        throw error;
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (user?.email) {
      fetch('http://localhost:3000/users')
        .then((res) => res.json())
        .then((users) => {
          const foundUser = users.find((u) => u.email === user.email);
          setUserDb(foundUser);
        });
    }
  }, [user]);

  const userInfo = {
    user,
    userDb,
    loading,
    createUser,
    signInUser,
    logOut,
    googleLogIn,
  };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
