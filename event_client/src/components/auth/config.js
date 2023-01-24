// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV_KuqLnSeFbBD1GkyHkX1ArRdfC9Wd1s",
  authDomain: "crowded-3ebca.firebaseapp.com",
  projectId: "crowded-3ebca",
  storageBucket: "crowded-3ebca.appspot.com",
  messagingSenderId: "359201210984",
  appId: "1:359201210984:web:bfe356fce59eaaf8b7f1dd",
  measurementId: "G-9N70BSTYB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);