// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb7hZzt9G4yjZPseKwTYS5AKggwoN0V0g",
  authDomain: "login-8fe9b.firebaseapp.com",
  projectId: "login-8fe9b",
  storageBucket: "login-8fe9b.appspot.com",
  messagingSenderId: "215283474188",
  appId: "1:215283474188:web:f87838ab73d13dd0de7329"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

