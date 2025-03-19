// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "taskmanager-c9c51.firebaseapp.com",
  projectId: "taskmanager-c9c51",
  storageBucket: "taskmanager-c9c51.firebasestorage.app",
  messagingSenderId: "588434820718",
  appId: "1:588434820718:web:968c7f80c3c045e4f0e07f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);