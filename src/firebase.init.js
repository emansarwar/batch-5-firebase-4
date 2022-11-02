// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRLDtdC8Npo5hxcZFfq_JpoW2XJ92EFzI",
  authDomain: "batch-five-firebase-four.firebaseapp.com",
  projectId: "batch-five-firebase-four",
  storageBucket: "batch-five-firebase-four.appspot.com",
  messagingSenderId: "520770202069",
  appId: "1:520770202069:web:46307e281d8228b6b1355c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;