// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQyii_yYd1jp7SELdlrJ1S7_G0z45ldm4",
  authDomain: "netflixgpt-e9eac.firebaseapp.com",
  projectId: "netflixgpt-e9eac",
  storageBucket: "netflixgpt-e9eac.firebasestorage.app",
  messagingSenderId: "310590628948",
  appId: "1:310590628948:web:22f28c97d74dd8daaa39c1",
  measurementId: "G-BD3KTFCGS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();