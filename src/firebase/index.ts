import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4iZsgL_DMP-IxSmiiVPW3c5-zfJ47HHE",
  authDomain: "v-crm-a0b64.firebaseapp.com",
  projectId: "v-crm-a0b64",
  storageBucket: "v-crm-a0b64.appspot.com",
  messagingSenderId: "151371449864",
  appId: "1:151371449864:web:3111c2ef3d62f14a5e33bd",
  measurementId: "G-6J53N0DR1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
