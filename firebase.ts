import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyc6bt0Ff4_ZE5VGuXRZL_G8hnN69Yn4c",
  authDomain: "chatgpt-messenger-2da56.firebaseapp.com",
  projectId: "chatgpt-messenger-2da56",
  storageBucket: "chatgpt-messenger-2da56.appspot.com",
  messagingSenderId: "583240801355",
  appId: "1:583240801355:web:721789afa59b1e228a01ce",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
