import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an environment variable

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXNAMc91BBwFKxeNQ1lrsidH80pExSFgE",
  authDomain: "coinvesta-e20d8.firebaseapp.com",
  projectId: "coinvesta-e20d8",
  storageBucket: "coinvesta-e20d8.appspot.com",
  messagingSenderId: "402565211326",
  appId: "1:402565211326:web:b6a15e1dedc19ef74faaef",
  measurementId: "G-8CXD0L2ZES",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
