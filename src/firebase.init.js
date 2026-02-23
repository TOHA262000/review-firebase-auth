// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3FEURUMdbEtpCv91oiM2zocE7h-2owlE",
  authDomain: "review-firebase-auth.firebaseapp.com",
  projectId: "review-firebase-auth",
  storageBucket: "review-firebase-auth.firebasestorage.app",
  messagingSenderId: "672402927155",
  appId: "1:672402927155:web:febfab67200c68a8f83d46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);