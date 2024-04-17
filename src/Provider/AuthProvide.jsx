import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const AuthProvide = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const loginUser = (email, pass) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, pass);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const updateProfileInfo = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    const logOutUser = () => {
        setLoading(true);

        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("currentUser ", currentUser);
            setLoading(false);

        });

        return (() => {
            unSubscribe();
        })
    }, [])

    const authInfo = {
        user, registerUser, logOutUser, loginUser, loading, googleLogin, githubLogin, updateProfileInfo, setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

AuthProvide.propTypes = {
    children: PropTypes.node
}

export default AuthProvide;