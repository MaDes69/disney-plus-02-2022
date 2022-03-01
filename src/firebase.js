//firebase google 


import firebase from'./firebase';
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4ueRo80xVbajW0IMSkoEk6xu-I-B-HRc",
  authDomain: "disneyplus-clone-34711.firebaseapp.com",
  projectId: "disneyplus-clone-34711",
  storageBucket: "disneyplus-clone-34711.appspot.com",
  messagingSenderId: "868118107185",
  appId: "1:868118107185:web:4a8b1d314907ae98727110",
  measurementId: "G-D1R7DZ7JF8"
};


const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();

const db = getFirestore();

export const authentification = getAuth(app);
export default db;



