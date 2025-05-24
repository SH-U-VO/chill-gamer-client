// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOjyzbZPNfQB7ApI8eHEJ74d9SpCTSj3A",
  authDomain: "chill-gamer-4ffcf.firebaseapp.com",
  projectId: "chill-gamer-4ffcf",
  storageBucket: "chill-gamer-4ffcf.firebasestorage.app",
  messagingSenderId: "53808712586",
  appId: "1:53808712586:web:4e6c2305a48f036bbcd673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);