"use client";
import { useState } from 'react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Sign-in successful!');
    } catch (error) {
      alert('Error signing in: ' + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert('Sign-out successful!');
    } catch (error) {
      alert('Error signing out: ' + error.message);
    }
  };

  return (
    <div className="bg-blue-500 p-8 rounded-md shadow-md max-w-md mx-auto">
      <h2 className="text-2xl text-white mb-4">Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="mb-4">
          <label className="text-white block mb-2">Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-300" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="text-white block mb-2">Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-300" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-white text-blue-500 p-2 rounded-md hover:bg-blue-100 transition-colors duration-300"
        >
          Sign In
        </button>
      </form>
      <button 
        onClick={handleSignOut} 
        className="w-full mt-4 bg-white text-blue-500 p-2 rounded-md hover:bg-blue-100 transition-colors duration-300"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Auth;
