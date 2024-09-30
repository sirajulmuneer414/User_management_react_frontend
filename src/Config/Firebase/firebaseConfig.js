import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlIZ9mONcoZIYPDqu0DjzdwFIjQDg0MH8",
  authDomain: "user-managment-b60bf.firebaseapp.com",
  projectId: "user-managment-b60bf",
  storageBucket: "user-managment-b60bf.appspot.com",
  messagingSenderId: "787158618427",
  appId: "1:787158618427:web:9bfceb876aadc0cf32671e",
  measurementId: "G-WKF4RT92D2"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

