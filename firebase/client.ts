// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBoO2dYnmyiS5HZZPjzYtxiGjBwnPPx7aI",
    authDomain: "prepwise-f145d.firebaseapp.com",
    projectId: "prepwise-f145d",
    storageBucket: "prepwise-f145d.firebasestorage.app",
    messagingSenderId: "9841347593",
    appId: "1:9841347593:web:fb913dca71293587277cd8",
    measurementId: "G-QM5M8BMKLX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

