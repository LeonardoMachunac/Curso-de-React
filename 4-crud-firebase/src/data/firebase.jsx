// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDNIz7Nk9pehhZtUhI9pWmNNPC42Ihxoh4",
  authDomain: "fir-crud-29672.firebaseapp.com",
  projectId: "fir-crud-29672",
  storageBucket: "fir-crud-29672.appspot.com",
  messagingSenderId: "564126656309",
  appId: "1:564126656309:web:0a7151294c33c5f19f8e7c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db};