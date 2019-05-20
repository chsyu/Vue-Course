import firebase from "firebase/app";

// Initialize Firebase
let config = {
  apiKey: "AIzaSyD89dSF5uMoN5Oig4mkUu0g4kDgf7f6cJ0",
  authDomain: "vuexslack.firebaseapp.com",
  databaseURL: "https://vuexslack.firebaseio.com",
  projectId: "vuexslack",
  storageBucket: "vuexslack.appspot.com",
  messagingSenderId: "520664506704"
};
firebase.initializeApp(config);

window.firebase = firebase;
