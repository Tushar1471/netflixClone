// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9Jic222y1lb8HHQOkLD5tHp4zlqc8B5A",
    authDomain: "netflixgpt-56bba.firebaseapp.com",
    projectId: "netflixgpt-56bba",
    storageBucket: "netflixgpt-56bba.appspot.com",
    messagingSenderId: "1074349336616",
    appId: "1:1074349336616:web:ff28f2ffafa292ef24ed1d",
    measurementId: "G-TZ9Q5R6THD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();