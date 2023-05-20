// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-i2JDot1uUxDhhTaq_-_rPPFPZyDDCK0",
  authDomain: "react-chat-app-71401.firebaseapp.com",
  projectId: "react-chat-app-71401",
  storageBucket: "react-chat-app-71401.appspot.com",
  messagingSenderId: "1007713044827",
  appId: "1:1007713044827:web:7edeb1763fd0aeaee6f27e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)