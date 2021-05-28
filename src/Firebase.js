import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBqOCXpnnxAGugG4xJ2ftp50SJc3tZ0KNw",
  authDomain: "e-wallet-c19d7.firebaseapp.com",
  projectId: "e-wallet-c19d7",
  storageBucket: "e-wallet-c19d7.appspot.com",
  messagingSenderId: "742498901966",
  appId: "1:742498901966:web:67df8e39ef907e13c4159f",
});

export const auth = app.auth();
export default app;
