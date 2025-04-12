import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDR7duEJOYCmH_xKFFAf6Nc50a0S64zQM",
  authDomain: "babcock-chess-club.firebaseapp.com",
  projectId: "babcock-chess-club",
  storageBucket: "babcock-chess-club.firebasestorage.app",
  messagingSenderId: "450153170612",
  appId: "1:450153170612:web:8ff22db82f0c999e6239e1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
