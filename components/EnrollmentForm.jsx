"use client";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const EnrollmentForm = () => {
  // Use a single object to hold auth data
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [isNewUser, setIsNewUser] = useState(false);
  const [user, setUser] = useState(null);

  // Use an object for enrollment fields to avoid repetition
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    dateOfBirth: "",
    guardianName: "",
    guardianPhoneNumber: "",
  });

  // Firebase auth subscribe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle changes for authentication inputs
  const handleAuthChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  // Handle sign in / sign up
  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = authData;
      const userCredential = isNewUser
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert("Authentication Error: " + error.message);
    }
  };

  // Handle changes in enrollment form fields
  const handleEnrollmentChange = (e) => {
    setEnrollmentData({ ...enrollmentData, [e.target.name]: e.target.value });
  };

  // Handle enrollment submit
  const handleEnrollmentSubmit = async (e) => {
    e.preventDefault();
    // Check that all enrollment fields are filled
    for (let key in enrollmentData) {
      if (!enrollmentData[key]) {
        alert("Please fill in all enrollment fields.");
        return;
      }
    }
    if (!user) {
      alert("Please sign in first.");
      return;
    }
    try {
      await addDoc(collection(db, "students"), {
        ...enrollmentData,
        email: authData.email, // from auth
        uid: user.uid,
      });
      alert("Enrollment successful!");
      // Optionally reset the enrollment form
      setEnrollmentData({
        name: "",
        address: "",
        phoneNumber: "",
        dateOfBirth: "",
        guardianName: "",
        guardianPhoneNumber: "",
      });
    } catch (error) {
      alert("Enrollment Error: " + error.message);
    }
  };

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      alert("Error signing out: " + error.message);
    }
  };

  return (
    <div className="bg-blue-500 p-8 rounded-md shadow-md max-w-md mx-auto">
      <h2 className="text-2xl text-white mb-4">Enrollment Portal</h2>

      {!user ? (
        <>
          <form onSubmit={handleAuth} className="mb-4">
            <div className="mb-4">
              <label className="text-white block mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={authData.email}
                onChange={handleAuthChange}
                className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-white block mb-2">Password:</label>
              <input
                type="password"
                name="password"
                value={authData.password}
                onChange={handleAuthChange}
                className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-500 p-2 rounded-md hover:bg-blue-100 transition-colors duration-300"
            >
              {isNewUser ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <button
            type="button"
            onClick={() => setIsNewUser(!isNewUser)}
            className="w-full bg-gray-500 text-white p-2 rounded-md hover:bg-gray-700 transition-colors duration-300"
          >
            {isNewUser ? "Switch to Sign In" : "Switch to Sign Up"}
          </button>
        </>
      ) : (
        <>
          <p className="text-white mb-4">Logged in as: {authData.email}</p>
          <form onSubmit={handleEnrollmentSubmit}>
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Address", name: "address", type: "text" },
              { label: "Phone Number", name: "phoneNumber", type: "tel" },
              { label: "Date of Birth", name: "dateOfBirth", type: "date" },
              { label: "Guardian Name", name: "guardianName", type: "text" },
              {
                label: "Guardian Phone Number",
                name: "guardianPhoneNumber",
                type: "tel",
              },
            ].map((field) => (
              <div key={field.name} className="mb-4">
                <label className="text-white block mb-2">
                  {field.label}:
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={enrollmentData[field.name]}
                  onChange={handleEnrollmentChange}
                  className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-white text-blue-500 p-2 rounded-md hover:bg-blue-100 transition-colors duration-300"
            >
              Submit Enrollment
            </button>
          </form>
          <button
            type="button"
            onClick={handleSignOut}
            className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-700 transition-colors duration-300 mt-2"
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
};

export default EnrollmentForm;
