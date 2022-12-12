// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQC0olN70ELjRXFNGVgdUWvDOU3Xr6S8w",
  authDomain: "viv-twins.firebaseapp.com",
  projectId: "viv-twins",
  storageBucket: "gs://viv-twins.appspot.com",
  messagingSenderId: "219338120214",
  appId: "1:219338120214:web:06acd8144d55826ac6a937"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAnalytics = getAnalytics(FirebaseApp);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );

export const storage = getStorage(FirebaseApp);