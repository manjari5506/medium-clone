// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwrcqB6kvulcW6h-ZR-DGfz7TJyix36_A",
  authDomain: "crud-app-ce78b.firebaseapp.com",
  projectId: "crud-app-ce78b",
  storageBucket: "crud-app-ce78b.appspot.com",
  messagingSenderId: "644987863680",
  appId: "1:644987863680:web:74240f3c833637b1e05c65"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
