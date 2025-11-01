// Firebase SDK funksiyalarini import qilish
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

// 🔥 Sizning Firebase konfiguratsiyangiz
const firebaseConfig = {
  apiKey: "AIzaSyBYf0yxerZxtHYrrshV3FfWvCrf4UfGqVw",
  authDomain: "newpremium-a4fe8.firebaseapp.com",
  databaseURL: "https://newpremium-a4fe8-default-rtdb.firebaseio.com",
  projectId: "newpremium-a4fe8",
  storageBucket: "newpremium-a4fe8.appspot.com",
  messagingSenderId: "288211585587",
  appId: "1:288211585587:web:f10bf78119baef6d98f146",
  measurementId: "G-33B97P3FD7"
};

// Firebase’ni ishga tushirish
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

// 🔁 Firebase obyektlarini boshqa fayllarda ishlatish uchun eksport qilish
export { app, database, ref, set, push, onValue, remove, update, storage, sRef, uploadBytes, getDownloadURL, deleteObject };
