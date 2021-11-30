import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqRGoUEo3rVNqFzhC7t6trL1_JyURwxNs",
  authDomain: "todolist-46c38.firebaseapp.com",
  projectId: "todolist-46c38",
  storageBucket: "todolist-46c38.appspot.com",
  messagingSenderId: "20271953633",
  appId: "1:20271953633:web:43b3c00f3f569e6737a9a0",
  measurementId: "G-B5YJ7WCTPE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const dbfirebase = app.database();
