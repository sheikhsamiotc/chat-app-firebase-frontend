import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "react-chat-app-c3ef1.firebaseapp.com",
    projectId: "react-chat-app-c3ef1",
    storageBucket: "react-chat-app-c3ef1.firebasestorage.app",
    messagingSenderId: "869640001703",
    appId: "1:869640001703:web:0273d62032d0580bbca382",
    measurementId: "G-8XSDYT32BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
