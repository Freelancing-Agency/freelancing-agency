// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-pC9LfJ9JhnAI_KHWIEOEHSLjgIQyb8c",
  authDomain: "opemic-a6349.firebaseapp.com",
  projectId: "opemic-a6349",
  storageBucket: "opemic-a6349.appspot.com",
  messagingSenderId: "368103051915",
  appId: "1:368103051915:web:f191326191f35f4c083a8e",
  measurementId: "G-D5LWNBE0FX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Get a non-default Storage bucket
export const storage = getStorage(app);

export const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);