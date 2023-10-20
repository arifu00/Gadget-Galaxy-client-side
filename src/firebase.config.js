// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCgVtmYlUaDwV3bnviQL2GxJ6j2vphafY",
  authDomain: "gadget-galaxy-e323f.firebaseapp.com",
  projectId: "gadget-galaxy-e323f",
  storageBucket: "gadget-galaxy-e323f.appspot.com",
  messagingSenderId: "700087202582",
  appId: "1:700087202582:web:63c8ece66d6b2a903e5637",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
