// Firebase initialization and Firestore export
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAG2qpR6oteWHh0HShi-HOxJb67Galq1Vw",
    authDomain: "croife-website.firebaseapp.com",
    databaseURL: "https://croife-website-default-rtdb.firebaseio.com",
    projectId: "croife-website",
    storageBucket: "croife-website.firebasestorage.app",
    messagingSenderId: "657631103357",
    appId: "1:657631103357:web:f9d2ffb2d2ff8e9e71a414",
    measurementId: "G-FR3BPMNHZQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
