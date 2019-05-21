import firebase from "firebase/app";

// Initialize Firebase
let config = {
  apiKey: "AIzaSyBWkL1ZDkWwGW8IaEVFEhniEJFfM284wwE",
  authDomain: "f2e2018-10e3d.firebaseapp.com",
  databaseURL: "https://f2e2018-10e3d.firebaseio.com",
  projectId: "f2e2018-10e3d",
  storageBucket: "f2e2018-10e3d.appspot.com",
  messagingSenderId: "315995849194",
  appId: "1:315995849194:web:5103d9e1d0bc2da0"
};
firebase.initializeApp(config);

window.firebase = firebase;
