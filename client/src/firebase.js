import firebase from "firebase/app"; 
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAKiXbHOUvLicBQHBNjTbIu8qVwP4eSu6U",
    authDomain: "testchat-f3f39.firebaseapp.com",
    projectId: "testchat-f3f39",
    storageBucket: "testchat-f3f39.appspot.com",
    messagingSenderId: "449540012848",
    appId: "1:449540012848:web:68c4722c1385470829e6f5",
    measurementId: "G-ZFNFJK57PG"
  }).auth();

