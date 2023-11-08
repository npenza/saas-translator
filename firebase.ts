// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV3r4PbQxZXD3voPlzHqlLUB0JvSmQgkM",
  authDomain: "saas-translator-dba92.firebaseapp.com",
  projectId: "saas-translator-dba92",
  storageBucket: "saas-translator-dba92.appspot.com",
  messagingSenderId: "917313082249",
  appId: "1:917313082249:web:524ad19791fffc8e1e0758",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
