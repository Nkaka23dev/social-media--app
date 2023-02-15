// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVm0Y_TX7vWd0RtSaY_Udy8jQy9PN42F4",
  authDomain: "social-media-8ba2e.firebaseapp.com",
  projectId: "social-media-8ba2e",
  storageBucket: "social-media-8ba2e.appspot.com",
  messagingSenderId: "576460108066",
  appId: "1:576460108 066:web:1e0cf85e5db2619d4eb57b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);
export const provider =  new GoogleAuthProvider();