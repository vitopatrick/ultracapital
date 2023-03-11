import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnGEvidXXTA24J3x2kkBKW5DfpRdUyXNA",
  authDomain: "paramount-assets-eabda.firebaseapp.com",
  projectId: "paramount-assets-eabda",
  storageBucket: "paramount-assets-eabda.appspot.com",
  messagingSenderId: "1679887290",
  appId: "1:1679887290:web:58fc84c3548335c19deb83",
  measurementId: "G-V2J234Y7TZ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
