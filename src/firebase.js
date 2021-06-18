import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDch6EW4Fn3mvK-fEUcCEslHIXxqw4h2VQ",
    authDomain: "clone-e15f0.firebaseapp.com",
    projectId: "clone-e15f0",
    storageBucket: "clone-e15f0.appspot.com",
    messagingSenderId: "965777401330",
    appId: "1:965777401330:web:018629f37c5d42c878b76b",
    measurementId: "G-7RCE0Q80QG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }