// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEtJEg1uykRf4AyedWFlDpxg_zBG5-sHQ",
  authDomain: "b9a9-6933a.firebaseapp.com",
  projectId: "b9a9-6933a",
  storageBucket: "b9a9-6933a.appspot.com",
  messagingSenderId: "651865757976",
  appId: "1:651865757976:web:d5db0797da1872ffc2a66d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;