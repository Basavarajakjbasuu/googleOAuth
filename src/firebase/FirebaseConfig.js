import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1kJ8q9Nt06bq1IVIWhKJTTAR0R7ruDVk",
  authDomain: "auth-5a028.firebaseapp.com",
  projectId: "auth-5a028",
  storageBucket: "auth-5a028.appspot.com",
  messagingSenderId: "1065214597408",
  appId: "1:1065214597408:web:af8f81319191df4a321f45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

