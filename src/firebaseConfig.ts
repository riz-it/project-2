// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
require("firebase/auth");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaJwsf2Iwuz3K5ZRzClBbVdlw4TLLh_Wg",
  authDomain: "todolist-c6029.firebaseapp.com",
  projectId: "todolist-c6029",
  storageBucket: "todolist-c6029.appspot.com",
  messagingSenderId: "168460269417",
  appId: "1:168460269417:web:6b6c8622c3adbcbe692ff8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
