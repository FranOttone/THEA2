import firebase from "firebase/app";
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAahLHoAq5KN0kaMzz9UB6RjriWiAn4iB8",
    authDomain: "thea-25fe4.firebaseapp.com",
    projectId: "thea-25fe4",
    storageBucket: "thea-25fe4.appspot.com",
    messagingSenderId: "545515480685",
    appId: "1:545515480685:web:1f52289fadd6054d4d0164"
  };
  
  const fb=firebase.initializeApp(firebaseConfig);
  export const db=fb.firestore();