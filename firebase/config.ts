// Import required Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';

// Define an interface for student data
interface StudentData {
  name: string;
  age: number;
  class: string;
  [key: string]: any; // Optional if additional fields are dynamic
}

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
const provider = new GoogleAuthProvider();

// Function for signing in with Google
export const signInWithGoogle = async (): Promise<void> => {
  try {
    await signInWithPopup(auth, provider);
    console.log("User signed in with Google!");
  } catch (error: any) {
    console.error("Error during Google sign-in:", error.message);
    throw new Error(error.message);
  }
};

// Function to log out
export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("User signed out successfully!");
  } catch (error: any) {
    console.error("Error during sign-out:", error.message);
    throw new Error(error.message);
  }
};

// Function to add a student to Firestore
export const addStudent = async (studentData: StudentData): Promise<{ success: boolean; message?: string }> => {
  try {
    await addDoc(collection(db, 'students'), studentData);
    return { success: true };
  } catch (error: any) {
    console.error("Error adding student:", error.message);
    return { success: false, message: error.message };
  }
};

// Export authentication state listener
export const onAuthChange = (callback: (user: any) => void): void => {
  onAuthStateChanged(auth, callback);
};
