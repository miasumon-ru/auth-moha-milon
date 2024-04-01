
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1vvBKTas9P_pcZne7yhej_UduPp8kEVg",
  authDomain: "auth-moha-milon-dc3be.firebaseapp.com",
  projectId: "auth-moha-milon-dc3be",
  storageBucket: "auth-moha-milon-dc3be.appspot.com",
  messagingSenderId: "272792991573",
  appId: "1:272792991573:web:2677ddefa164f3e2f921dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
