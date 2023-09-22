// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZLCLF1V-Aj_IbbjCQu95B3OE87styqxw",
  authDomain: "sih-wool.firebaseapp.com",
  projectId: "sih-wool",
  storageBucket: "sih-wool.appspot.com",
  messagingSenderId: "259316072329",
  appId: "1:259316072329:web:3dd8137b85008624436b58",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
