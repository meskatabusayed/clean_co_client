// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABy7GlnJJ7__O3y540FWLk5ys6d_wN00M",
  authDomain: "simple-firebase-fdc26.firebaseapp.com",
  projectId: "simple-firebase-fdc26",
  storageBucket: "simple-firebase-fdc26.appspot.com",
  messagingSenderId: "496551384604",
  appId: "1:496551384604:web:27d3bd9e94d2e047a231d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);