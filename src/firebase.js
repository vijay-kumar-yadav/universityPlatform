import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";



const app = firebase.initializeApp({
    apiKey: "AIzaSyCSjtgyigeIXwB3rB_V3QvQLpujS8_p6k0",
    authDomain: "hustleflow-18714.firebaseapp.com",
    projectId: "hustleflow-18714",
    storageBucket: "hustleflow-18714.appspot.com",
    messagingSenderId: "119793600037",
    appId: "1:119793600037:web:7479500ce0e76dbe93e1cc"
})



export const auth = app.auth();
export const db = getFirestore(app)
export default app;