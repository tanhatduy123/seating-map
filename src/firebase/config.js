// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRJnRkS0pBxTKjGShOmuA2qD8I2cbjYv8",
  authDomain: "api-seat-map.firebaseapp.com",
  projectId: "api-seat-map",
  storageBucket: "api-seat-map.appspot.com",
  messagingSenderId: "108264141957",
  appId: "1:108264141957:web:9a390d384bfb106c6e25ec",
  measurementId: "G-WEZQCSFXHR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
