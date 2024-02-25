import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzvtCClZW_bQcumXYMyYVrH2VdUzwNVTw",
  authDomain: "jota-shoes.firebaseapp.com",
  projectId: "jota-shoes",
  storageBucket: "jota-shoes.appspot.com",
  messagingSenderId: "886298321502",
  appId: "1:886298321502:web:08b607d87e242e793f4acf"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)