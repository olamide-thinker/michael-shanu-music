import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCM1iCaTpbaoUK0rQTvbquz2z34mZRQ1t0",
  authDomain: "michael-shanu-music.firebaseapp.com",
  projectId: "michael-shanu-music",
  storageBucket: "michael-shanu-music.appspot.com",
  messagingSenderId: "569346015289",
  appId: "1:569346015289:web:602a9ab0aabf972706cde8",
  measurementId: "G-E4780K2EDM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
