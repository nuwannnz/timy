// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgmyPYx0I1CJOzHERWN4px0Pid6z-ercY",
  authDomain: "bloggy-ded18.firebaseapp.com",
  projectId: "bloggy-ded18",
  storageBucket: "bloggy-ded18.appspot.com",
  messagingSenderId: "938578997289",
  appId: "1:938578997289:web:ddca762ef6d1e291916c38",
};

export const initializeFirebase = () => {
  // Initialize Firebase
  if (getApps().length === 0) {
    initializeApp(firebaseConfig);
  }
};
