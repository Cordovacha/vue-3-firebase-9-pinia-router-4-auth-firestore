import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBH_KKwSN1RpSB6mW9wu-0cmlg9Oc8Xwow",
    authDomain: "vue-3-2024-ba6f2.firebaseapp.com",
    projectId: "vue-3-2024-ba6f2",
    storageBucket: "vue-3-2024-ba6f2.appspot.com",
    messagingSenderId: "60105094773",
    appId: "1:60105094773:web:b3ec5cd45ef123009daa3c"
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };