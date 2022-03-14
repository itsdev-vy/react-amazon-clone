import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_AMAZON,
    authDomain: "clone-244f8.firebaseapp.com",
    projectId: "clone-244f8",
    storageBucket: "clone-244f8.appspot.com",
    messagingSenderId: "330019277790",
    appId: "1:330019277790:web:eb0bddf5dc864bb691eb4f",
    measurementId: "G-22V7Q0QP53"
});

const db = firebase.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };