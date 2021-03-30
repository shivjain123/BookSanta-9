import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAxtZKKcT60WoEC5vAvOgrHzpTgvfzmGw4",
  authDomain: "book-santa-18926.firebaseapp.com",
  projectId: "book-santa-18926",
  storageBucket: "book-santa-18926.appspot.com",
  messagingSenderId: "732502290841",
  appId: "1:732502290841:web:0bf88897d197f3b246a308"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
