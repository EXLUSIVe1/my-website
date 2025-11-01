// Firebase SDK modullarini import qilish
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYf0yxerZxtHYrrshV3FfWvCrf4UfGqVw",
  authDomain: "newpremium-a4fe8.firebaseapp.com",
  databaseURL: "https://newpremium-a4fe8-default-rtdb.firebaseio.com",
  projectId: "newpremium-a4fe8",
  storageBucket: "newpremium-a4fe8.firebasestorage.app",
  messagingSenderId: "288211585587",
  appId: "1:288211585587:web:f10bf78119baef6d98f146",
  measurementId: "G-33B97P3FD7"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
