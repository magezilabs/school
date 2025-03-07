// Import required Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-K393FPQYND"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore & Authentication
export const db = getFirestore(app);
export const auth = getAuth(app);

// Google Authentication Setup
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);

// Function to Add Student to Firestore
export const addStudent = async (studentData) => {
  try {
    await addDoc(collection(db, 'students'), studentData);
    return { success: true };
  } catch (error) {
    console.error("Error adding student:", error);
    return { success: false, error };
  }
};

// Export Authentication State Listener
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};
