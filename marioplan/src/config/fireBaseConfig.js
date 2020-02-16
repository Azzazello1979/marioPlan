import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBm1kaCQFrvVOxS8MqAm6cIfnWqoupU0Hk",
    authDomain: "marioplan-678df.firebaseapp.com",
    databaseURL: "https://marioplan-678df.firebaseio.com",
    projectId: "marioplan-678df",
    storageBucket: "marioplan-678df.appspot.com",
    messagingSenderId: "539796745467",
    appId: "1:539796745467:web:6be12d34598aa22e4d545e",
    measurementId: "G-9SSX4MVSYL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
  