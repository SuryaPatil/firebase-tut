// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrBV-mtmoEz0XYAs_Eotd1Ee3-w3mPdpA",
  authDomain: "fir-tutorial-5af1e.firebaseapp.com",
  projectId: "fir-tutorial-5af1e",
  storageBucket: "fir-tutorial-5af1e.appspot.com",
  messagingSenderId: "360162246656",
  appId: "1:360162246656:web:13b6b9e2b0fe73582498e5",
  measurementId: "G-VDP9RHSCXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore()