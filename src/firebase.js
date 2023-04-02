import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an environment variable

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArWQG5OmH75NW7BehnuHVlspsq_J-JC6E",
  authDomain: "ultra-capital.firebaseapp.com",
  projectId: "ultra-capital",
  storageBucket: "ultra-capital.appspot.com",
  messagingSenderId: "211947658070",
  appId: "1:211947658070:web:5a6019d77fd00984a0d4f7",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
