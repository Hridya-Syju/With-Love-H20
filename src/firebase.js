// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from 'firebase/firestore';
import{getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMUDDPUOz6ymF-FQxPkXNaKH-Qy0M7h58",
  authDomain: "withloveh20-aabfe.firebaseapp.com",
  projectId: "withloveh20-aabfe",
  storageBucket: "withloveh20-aabfe.appspot.com",
  messagingSenderId: "679084583687",
  appId: "1:679084583687:web:dc400cec0844b3978c33a2",
  measurementId: "G-V7JFZLTTBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
