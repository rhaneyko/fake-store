// Importa o Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0v6VrCm4jq2PVCwPt5Os9kzodEs9YrYU",
  authDomain: "fake-store-5d479.firebaseapp.com",
  projectId: "fake-store-5d479",
  storageBucket: "fake-store-5d479.firebasestorage.app",
  messagingSenderId: "573710141980",
  appId: "1:573710141980:web:af8445b368c0d49a1aadd9",
  measurementId: "G-C0Q168TKY6"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
