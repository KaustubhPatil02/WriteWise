// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTsSEkd5wsz0Rywa5Qj1m6_59WSI6yfLk",
  authDomain: "mediumapp-b9ab4.firebaseapp.com",
  projectId: "mediumapp-b9ab4",
  storageBucket: "mediumapp-b9ab4.appspot.com",
  messagingSenderId: "729358729061",
  appId: "1:729358729061:web:885a822adb4fd6e3132b8c",
  measurementId: "G-L3TKDWFTXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);