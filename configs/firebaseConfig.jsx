// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "newesr-8c96c.firebaseapp.com",
  projectId: "newesr-8c96c",
  storageBucket: "newesr-8c96c.firebasestorage.app",
  messagingSenderId: "849889283809",
  appId: "1:849889283809:web:34c87f4875e5b24b5f71a0",
  measurementId: "G-0CB6FV9TKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)