// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQkDl0UqJdFnIkM0sMIAmbDngrRe48DtU",
  authDomain: "social-media-app-2d3ac.firebaseapp.com",
  projectId: "social-media-app-2d3ac",
  storageBucket: "social-media-app-2d3ac.appspot.com",
  messagingSenderId: "117752231218",
  appId: "1:117752231218:web:70dedb24b201ffe237532b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app)