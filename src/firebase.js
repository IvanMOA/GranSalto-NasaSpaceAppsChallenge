import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3HS3tZ09Z_AYPhkl3CRUTeTnjMTj_ap4",
  authDomain: "gransalto-ba287.firebaseapp.com",
  projectId: "gransalto-ba287",
  storageBucket: "gransalto-ba287.appspot.com",
  messagingSenderId: "134781324518",
  appId: "1:134781324518:web:564697714f2ed44577ff27",
  measurementId: "G-WL36X2R93H",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();

export const usersCollection = db.collection("users");

app.analytics();
