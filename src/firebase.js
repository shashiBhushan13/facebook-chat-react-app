import firebase from 'firebase';

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyAo3cv4QsqQFT2ghk7AEW8beblVIDIfG6o",
    authDomain: "facebook-messenger-clone-9e36b.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-9e36b.firebaseio.com",
    projectId: "facebook-messenger-clone-9e36b",
    storageBucket: "facebook-messenger-clone-9e36b.appspot.com",
    messagingSenderId: "884460122948",
    appId: "1:884460122948:web:ecb0cfa1e5b1ca3deadd11",
    measurementId: "G-E4XWG0CBPR"
  });

const db=firebase.firestore();

export default db;