// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwtmQjWZCKfIhyTI0Y-Uktp8SArhqhYjc",

  authDomain: "todoapp-23cb3.firebaseapp.com",

  projectId: "todoapp-23cb3",

  storageBucket: "todoapp-23cb3.appspot.com",

  messagingSenderId: "812589859484",

  appId: "1:812589859484:web:17566e80abd7c0f2a92359",

  measurementId: "G-EHTLFPVHK5",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const database = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
