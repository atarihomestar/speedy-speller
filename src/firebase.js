import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOKkBoBaMxxYv1nnCz-FiWf8N5uzpBR2E",
  authDomain: "speedy-speller.firebaseapp.com",
  projectId: "speedy-speller",
  storageBucket: "speedy-speller.appspot.com",
  messagingSenderId: "813482338078",
  appId: "1:813482338078:web:9c8893e06c5b809e7bcb0f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
