// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIhxk6Adhs78dP6JbN6DUQsMh6urPyePg",
  authDomain: "dentalcare-fdc83.firebaseapp.com",
  projectId: "dentalcare-fdc83",
  storageBucket: "dentalcare-fdc83.appspot.com",
  messagingSenderId: "957469366484",
  appId: "1:957469366484:web:b23bf9b90b85814d4d4341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
