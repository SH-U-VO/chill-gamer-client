import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [userDb, setUserDb] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log('Auth state changed:', currentUser);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                console.error('Firebase createUser Error:', error.code, error.message);
                throw error; // Re-throw the error so the calling component can handle it
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
            })
            .catch((error) => {
                console.error('Firebase logOut Error:', error.code, error.message);
                throw error;
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(users => {
                const foundUser = users.find(u => u.email === user.email);
                setUserDb(foundUser);
            });
    }, [user]);

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        userDb
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;