import firebase from 'firebase'

import 'firebase/firestore'

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDcIYjHHlb_uUzyccClOEIuwkVqNtMOEqc",
  authDomain: "react-native-firebase-46516.firebaseapp.com",
  projectId: "react-native-firebase-46516",
  storageBucket: "react-native-firebase-46516.appspot.com",
  messagingSenderId: "384265127085",
  appId: "1:384265127085:web:777ac18f588ca4087e3224"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default { 
  firebase,
  db
 }