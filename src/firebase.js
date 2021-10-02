// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3HS3tZ09Z_AYPhkl3CRUTeTnjMTj_ap4",
  authDomain: "gransalto-ba287.firebaseapp.com",
  projectId: "gransalto-ba287",
  storageBucket: "gransalto-ba287.appspot.com",
  messagingSenderId: "134781324518",
  appId: "1:134781324518:web:564697714f2ed44577ff27",
  measurementId: "G-WL36X2R93H",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
