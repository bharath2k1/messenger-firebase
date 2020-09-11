import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCJGb7d4TFD13qgcqiw4171zs53S7S-J-o",
  authDomain: "messenger-clone-80737.firebaseapp.com",
  databaseURL: "https://messenger-clone-80737.firebaseio.com",
  projectId: "messenger-clone-80737",
  storageBucket: "messenger-clone-80737.appspot.com",
  messagingSenderId: "701537357894",
  appId: "1:701537357894:web:a63eec8a5e2c6ecd4e3a47",
});

const db = firebaseApp.firestore();
export default db;
