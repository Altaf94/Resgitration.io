// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIUJnGqb6eLLxid8Pm9kDhmC3lB-dzN-E",
  authDomain: "fir-auth-69c80.firebaseapp.com",
  databaseURL: "https://fir-auth-69c80-default-rtdb.firebaseio.com",
  projectId: "fir-auth-69c80",
  storageBucket: "fir-auth-69c80.appspot.com",
  messagingSenderId: "134056978636",
  appId: "1:134056978636:web:4caa9471fa4e6efbddba69",
  measurementId: "G-DWSB37PL3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app};