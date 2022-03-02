// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk6BFWmNdZ-_sE17NIbcxRtBBBUysulM8",
  authDomain: "portfolias-8f678.firebaseapp.com",
  projectId: "portfolias-8f678",
  storageBucket: "portfolias-8f678.appspot.com",
  messagingSenderId: "158916064276",
  appId: "1:158916064276:web:3553cdc7da945920f56301",
  measurementId: "G-8NV48K8ZBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);