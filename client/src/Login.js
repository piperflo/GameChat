import React from 'react';
import  {GoogleOutlined, UserAddOutlined } from '@ant-design/icons'
import "firebase/app";
import {auth} from "./firebase";
import firebase from 'firebase/app';
import { getAuth} from "firebase/auth";
import './Login.css';

//There were a lot of good examples on the firebase website
const Login = () => {
  function login(email, password){
    //return createUserWithEmailAndPassword(auth, email, password);
  }
  /*Insert after line 22
        <div className="email-login" onClick={() => auth.signInWithRedirect(new firebase.auth.EmailAuthProvider())}>
          <UserAddOutlined /> Sign In With Email
        </div>
   */
  return (
    <div id="login-page">
      <div id="login-form">
        <h2>Please Sign In</h2>
        <div className="google-login" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <GoogleOutlined/> Sign In With Google
        </div>
      </div>
    </div>
  )
}

export default Login
