import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZM-DqObpYUwm2nx-iAqs_wXdJ65r1FVY",
  authDomain: "loadin-391508.firebaseapp.com",
  databaseURL: "https://loadin-391508-default-rtdb.firebaseio.com",
  projectId: "loadin-391508",
  storageBucket: "loadin-391508.appspot.com",
  messagingSenderId: "686071981262",
  appId: "1:686071981262:web:98fe3ca53c69a6b1401c9f",
  measurementId: "G-90XJ893B5N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
