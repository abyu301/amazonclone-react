import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDC-cmJyJVqSrBjooNk948OdPsuUsyUYTU",
    authDomain: "clone-c60ec.firebaseapp.com",
    projectId: "clone-c60ec",
    storageBucket: "clone-c60ec.appspot.com",
    messagingSenderId: "8037531262",
    appId: "1:8037531262:web:9cf778d6efa66ff2f0622f"
    };


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
