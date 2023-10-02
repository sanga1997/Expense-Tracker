import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAus-_Gc7PjjBj-NWw6I6h2DnHRWitPJeo",
  authDomain: "expense-tracker-d4fb2.firebaseapp.com",
  projectId: "expense-tracker-d4fb2",
  storageBucket: "expense-tracker-d4fb2.appspot.com",
  messagingSenderId: "252693413419",
  appId: "1:252693413419:web:27c013fbeb7b2858d3b46e",
  measurementId: "G-XH9L4XBKGZ"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

