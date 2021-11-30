import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqXDaOiB8t4x8Sr_sftjIOzTvHMv4zQLw",
  authDomain: "todolistrizalids.firebaseapp.com",
  projectId: "todolistrizalids",
  storageBucket: "todolistrizalids.appspot.com",
  messagingSenderId: "152595017457",
  appId: "1:152595017457:web:1095892d9afcf2ffe88350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const dbfirebase = app.database();
