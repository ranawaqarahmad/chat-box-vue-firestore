// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCObKbown0Jt1gSHDRPn4tMNANk_BNybgM",
  authDomain: "chat-app-vue-85c03.firebaseapp.com",
  projectId: "chat-app-vue-85c03",
  storageBucket: "chat-app-vue-85c03.appspot.com",
  messagingSenderId: "821361247533",
  appId: "1:821361247533:web:6c8e7b10006c8d20363fa4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

const db = getFirestore(app);

export default db;
