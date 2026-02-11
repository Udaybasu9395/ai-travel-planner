// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSob5a9qCSIXgh15kSlfUP1kA2j98o1ko",
  authDomain: "ai-travel-planner-c8d8e.firebaseapp.com",
  projectId: "ai-travel-planner-c8d8e",
  storageBucket: "ai-travel-planner-c8d8e.firebasestorage.app",
  messagingSenderId: "737066741250",
  appId: "1:737066741250:web:46c1da8b0420b40e5ac11b",
  measurementId: "G-JS3BWVE4J0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
