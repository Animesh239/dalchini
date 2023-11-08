// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcdmp5oZ0N9vUn5WUScJW_RK2qmcG15FY",
  authDomain: "note-app-2e34a.firebaseapp.com",
  projectId: "note-app-2e34a",
  storageBucket: "note-app-2e34a.appspot.com",
  messagingSenderId: "639914338304",
  appId: "1:639914338304:web:36bcc581cc3598b1e2d0e5",
  measurementId: "G-442M4CDFZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);