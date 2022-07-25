/*
This section of code was found on the firebase main website.

To summarize, this code is a way to get to the main website 
with chat functionality without losing login info

I also used some code from my reddit-clone application

https://chatengine.io/
https://chatengine.io/docs/react/v1
https://firebase.google.com/products/auth
https://stackoverflow.com/questions/68393566/how-to-import-authcontext-created-in-app-js-in-other-components
And my own personal code was used for this portion
* */

import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';

const AuthContext = React.createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            if(user) history.push('/home');
        })
    }, [user, history]);

    const value = { user }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}